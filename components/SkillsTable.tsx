"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface SkillsTableProps {
    extractedSkills: string[];
    missingSkills: string[];
}

export const SkillsTable = ({ extractedSkills, missingSkills }: SkillsTableProps) => {
    return (
        <Card className="glass-card border-slate-200/60 shadow-xl shadow-slate-200/40 rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                <CardTitle className="text-xl font-bold text-slate-800">Skills Analysis</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
                <div className="grid gap-10 md:grid-cols-2">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Matched Skills</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {extractedSkills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-100 px-3 py-1 rounded-lg font-medium hover:bg-emerald-100 transition-colors">
                                    {skill}
                                </Badge>
                            ))}
                            {extractedSkills.length === 0 && <span className="text-slate-400 italic text-sm">No matching skills identified.</span>}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="w-4 h-4 text-amber-500" />
                            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Missing Skills</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {missingSkills.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-amber-700 border-amber-200 bg-amber-50/50 px-3 py-1 rounded-lg font-medium hover:bg-amber-100 transition-colors">
                                    {skill}
                                </Badge>
                            ))}
                            {missingSkills.length === 0 && <span className="text-emerald-600 font-medium text-sm">✓ All target skills found!</span>}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
