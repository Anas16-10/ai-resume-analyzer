"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target } from "lucide-react";

interface ATSScoreCardProps {
    score: number;
}

export const ATSScoreCard = ({ score }: ATSScoreCardProps) => {
    const getScoreColor = (score: number) => {
        if (score >= 80) return "text-emerald-600";
        if (score >= 50) return "text-amber-600";
        return "text-red-600";
    };

    const getProgressColor = (score: number) => {
        if (score >= 80) return "bg-emerald-500";
        if (score >= 50) return "bg-amber-500";
        return "bg-red-500";
    };

    return (
        <Card className="glass-card overflow-hidden border-slate-200/60 shadow-xl shadow-slate-200/40 rounded-3xl">
            <CardHeader className="pb-2 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-indigo-600" />
                    <CardTitle className="text-sm font-bold text-slate-800 uppercase tracking-wider">ATS Score</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="pt-8">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative">
                        <div className={`text-7xl font-black ${getScoreColor(score)} tracking-tighter`}>
                            {score}
                            <span className="text-2xl font-bold align-top ml-0.5">%</span>
                        </div>
                    </div>

                    <div className="w-full space-y-2">
                        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className={`h-full ${getProgressColor(score)} transition-all duration-1000 ease-out`}
                                style={{ width: `${score}%` }}
                            />
                        </div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-0.5">
                            <span>0</span>
                            <span>100</span>
                        </div>
                    </div>

                    <p className="text-center text-sm text-slate-500 leading-relaxed font-medium bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        {score >= 80
                            ? "Excellent! Your resume is highly optimized for this position."
                            : score >= 50
                                ? "Good standing. Minor improvements could push you into the top tier."
                                : "Significant gaps identified. We recommend tailoring your resume more closely to the job."}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};
