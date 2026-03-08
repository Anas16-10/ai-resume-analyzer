import { NextRequest, NextResponse } from "next/server";
import { extractTextFromFile } from "@/lib/parser";
import { analyzeResume } from "@/lib/gemini";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("resume") as File;
        const jobDescription = formData.get("jobDescription") as string;

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

        // 3. (Database storage removed as per requirements)
        const resumeId = null;

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
