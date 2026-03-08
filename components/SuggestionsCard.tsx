"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, CheckCircle2 } from "lucide-react";

interface SuggestionsCardProps {
    suggestions: string[];
}

export const SuggestionsCard = ({ suggestions }: SuggestionsCardProps) => {
    return (
        <Card className="glass-card border-slate-200/60 shadow-xl shadow-slate-200/40 rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    <CardTitle className="text-xl font-bold text-slate-800">Actionable Suggestions</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-8">
                <ul className="space-y-5">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100/50 text-slate-600 transition-all hover:bg-white hover:shadow-md hover:shadow-slate-200/50 transition-all group">
                            <div className="mt-0.5 w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors">
                                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-[15px] leading-relaxed font-medium">{suggestion}</span>
                        </li>
                    ))}
                    {suggestions.length === 0 && (
                        <li className="text-slate-400 italic text-center py-4 font-medium flex flex-col items-center gap-2">
                            <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                            No specific suggestions. Your resume looks highly professional!
                        </li>
                    )}
                </ul>
            </CardContent>
        </Card>
    );
};
