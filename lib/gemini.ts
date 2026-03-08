import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const analyzeResume = async (resumeText: string, jobDescription: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

  const isGeneralAnalysis = !jobDescription || jobDescription.trim() === "";

  const prompt = `
You are an ATS (Applicant Tracking System) resume analyzer.

Your task is to analyze a resume ${isGeneralAnalysis
      ? "for overall resume quality and professional impact."
      : "against a specific job description."
    }

STRICT OUTPUT RULES:
- Return ONLY valid JSON.
- Do NOT include explanations, markdown, headings, or extra text.
- The response MUST start with { and end with }.
- All fields must be present in the JSON.
- Do not invent skills that are not present in the resume.

SCORING RULES:

Calculate an ATS score between 0 and 100.

${isGeneralAnalysis
      ? `
The score represents a "Resume Health Score" based on:
- clarity and readability
- presence of measurable achievements
- formatting quality
- skill density
- professional language
`
      : `
The score represents how well the resume matches the job description based on:
- skill match
- keyword relevance
- experience alignment
- technical skill coverage
`
    }

Return the response in EXACTLY this JSON structure:

{
  "ats_score": number,
  "extracted_skills": string[],
  "missing_skills": string[],
  "resume_summary": string,
  "improvement_suggestions": string[]
}

FIELD DEFINITIONS:

ats_score
A number between 0 and 100.

extracted_skills
List all technical or professional skills explicitly mentioned in the resume.

missing_skills
${isGeneralAnalysis
      ? "List 3–5 important industry-relevant skills that are NOT present in the resume."
      : "List important skills mentioned in the job description but missing from the resume."
    }

resume_summary
A concise 2–3 sentence professional summary of the candidate based only on the resume.

improvement_suggestions
Provide 3–5 clear and actionable suggestions to improve the resume ${isGeneralAnalysis ? "overall." : "for this specific job."
    }

Resume:
${resumeText}

${isGeneralAnalysis ? "" : `Job Description:\n${jobDescription}`}
`;

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.2,
      topP: 0.8,
      topK: 40,
      maxOutputTokens: 1024,
      responseMimeType: "application/json"
    }
  });

  const response = await result.response;
  const text = response.text();

  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("Error parsing Gemini response:", error);
    // Fallback parsing just in case it returns markdown
    try {
      const jsonString = text.replace(/```json\n?|\n?```/g, "").trim();
      return JSON.parse(jsonString);
    } catch (innerError) {
      throw new Error("Failed to parse AI response");
    }
  }
};
