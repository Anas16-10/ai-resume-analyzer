import mammoth from "mammoth";

export const extractTextFromPDF = async (buffer: Buffer): Promise<string> => {
    // Direct require of the submodule to bypass buggy index.js debug check
    const pdf = require("pdf-parse/lib/pdf-parse.js");
    try {
        const data = await pdf(buffer);
        return data.text;
    } catch (error: any) {
        console.error("PDF Parsing Error:", error.message);
        throw new Error(`Failed to extract text from PDF: ${error.message}`);
    }
};

export const extractTextFromDOCX = async (buffer: Buffer): Promise<string> => {
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
};

export const extractTextFromFile = async (file: File): Promise<string> => {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.toLowerCase();

    if (filename.endsWith(".pdf")) {
        return extractTextFromPDF(buffer);
    } else if (filename.endsWith(".docx")) {
        return extractTextFromDOCX(buffer);
    } else {
        throw new Error("Unsupported file format. Please upload a PDF or DOCX file.");
    }
};
