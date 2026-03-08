"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Loader2, FileText, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const ResumeUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [jobDescription, setJobDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleAnalyze = async () => {
        if (!file) return;

        setIsLoading(true);
        const formData = new FormData();
        formData.append("resume", file);
        formData.append("jobDescription", jobDescription);

        try {
            const response = await fetch("/api/analyze", {
                method: "POST",
                body: formData,
            });

            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch (e) {
                console.error("API non-JSON response:", text);
                alert(`Server returned an error. Please check terminal logs.\nStatus: ${response.status}`);
                return;
            }

            if (data.success) {
                // Store analysis in session storage for the results page
                sessionStorage.setItem("analysisResult", JSON.stringify(data.analysis));
                router.push("/results");
            } else {
                alert(data.error || "Analysis failed");
            }
        } catch (error) {
            console.error("Upload Error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="glass-card border-slate-200/50 shadow-2xl shadow-indigo-100/20">
            <CardHeader>
                <CardTitle className="text-3xl font-extrabold text-slate-800 text-center">
                    Upload Your Resume
                </CardTitle>
                <p className="text-slate-500 text-center text-sm font-medium">
                    Select a PDF or DOCX file to get started
                </p>
            </CardHeader>
            <CardContent className="space-y-8 p-10">
                <div className="space-y-4">
                    <Label htmlFor="resume" className="text-slate-700 text-sm font-semibold tracking-tight">
                        Resume File
                    </Label>
                    <div className="relative group">
                        <div className="flex flex-col gap-4">
                            <Input
                                id="resume"
                                type="file"
                                accept=".pdf,.docx"
                                onChange={handleFileChange}
                                className="cursor-pointer border-slate-200 bg-white/50 text-slate-600 hover:bg-slate-50 transition-all file:bg-indigo-50 file:text-indigo-600 file:border-0 file:rounded-md file:px-3 file:py-1 file:mr-3 h-14 flex items-center shadow-sm"
                            />
                            {file && (
                                <div className="flex items-center gap-3 text-sm text-indigo-600 bg-indigo-50/50 p-3 rounded-xl border border-indigo-100 animate-in zoom-in-95">
                                    <FileText className="h-4 w-4" />
                                    <span className="font-bold truncate">{file.name}</span>
                                    <CheckCircle2 className="h-4 w-4 ml-auto text-emerald-500" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <Label htmlFor="jd" className="text-slate-700 text-sm font-semibold tracking-tight">
                        Job Description <span className="text-slate-400 font-normal">(Optional)</span>
                    </Label>
                    <Textarea
                        id="jd"
                        placeholder="Paste the job description here for better matching..."
                        className="min-h-[180px] resize-none border-slate-200 bg-white/50 text-slate-600 focus:ring-2 focus:ring-indigo-500/20 p-5 leading-relaxed placeholder:text-slate-400 rounded-2xl shadow-sm"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    />
                </div>

                <Button
                    onClick={handleAnalyze}
                    disabled={!file || isLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 h-14 text-lg font-bold shadow-lg shadow-indigo-200 transition-all hover:scale-[1.01] active:scale-[0.98] rounded-2xl"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                            AI Analysis in Progress...
                        </>
                    ) : (
                        <>
                            <Upload className="mr-3 h-6 w-6" />
                            {jobDescription ? "Compare with Success" : "Analyze Resume"}
                        </>
                    )}
                </Button>
            </CardContent>
        </Card>
    );
};
