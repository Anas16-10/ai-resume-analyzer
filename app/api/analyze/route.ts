import { NextRequest, NextResponse } from "next/server";
import { extractTextFromFile } from "@/lib/parser";
import { analyzeResume } from "@/lib/gemini";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("resume") as File;
        const jobDescription = formData.get("jobDescription") as string;
        const userId = formData.get("userId") as string;

        if (!file) {
            return NextResponse.json(
                { error: "Resume file is required" },
                { status: 400 }
            );
        }

        // 1. Extract text from resume
        process.stdout.write("Extracting text...\n");
        const resumeText = await extractTextFromFile(file);
        process.stdout.write("Text extracted successfully.\n");

        // 2. Analyze with Gemini
        process.stdout.write("Analyzing with Gemini...\n");
        const analysis = await analyzeResume(resumeText, jobDescription);
        process.stdout.write("Analysis completed.\n");
        console.log("Analysis Result:", JSON.stringify(analysis, null, 2));

        // 3. Store in Supabase
        // If we have a userId, we can associate it
        let resumeId = null;
        if (userId) {
            process.stdout.write("Storing in Supabase...\n");
            const { data: resumeData, error: resumeError } = await supabase
                .from("resumes")
                .insert({
                    user_id: userId,
                    resume_text: resumeText,
                })
                .select()
                .single();

            if (resumeError) {
                console.error("Supabase Resume Error:", resumeError);
                throw resumeError;
            }
            resumeId = resumeData.id;

            const { error: analysisError } = await supabase.from("analysis_results").insert({
                resume_id: resumeId,
                job_description: jobDescription,
                ats_score: analysis.ats_score,
                extracted_skills: analysis.extracted_skills,
                missing_skills: analysis.missing_skills,
                resume_summary: analysis.resume_summary,
                improvement_suggestions: analysis.improvement_suggestions,
                analysis_status: 'completed'
            });

            if (analysisError) {
                console.error("Supabase Analysis Error:", analysisError);
                throw analysisError;
            }
        }

        return NextResponse.json({
            success: true,
            analysis,
            resumeId,
        });
    } catch (error: any) {
        console.error("Analysis API Error Details:", error);
        return NextResponse.json(
            { error: error.message || "Failed to analyze resume" },
            { status: 500 }
        );
    }
}
