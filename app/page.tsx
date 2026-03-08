import { Navbar } from "@/components/Navbar";
import { ResumeUpload } from "@/components/ResumeUpload";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2, Target, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <div className="w-full max-w-5xl px-6 pt-20 pb-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold mb-4 animate-in fade-in slide-in-from-bottom-2">
            <Sparkles className="w-3 h-3" />
            <span>AI-Powered ATS Insights</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900">
            Optimize Your Resume <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              For Your Dream Job
            </span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Upload your resume and get instant AI-powered feedback on your ATS score, extracted skills, and actionable improvement suggestions.
          </p>
        </div>

        {/* Upload Area */}
        <div className="w-full max-w-3xl px-6 pb-24">
          <div className="glass-card rounded-3xl p-1 overflow-hidden">
            <ResumeUpload />
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="w-full bg-white/40 border-y border-slate-200/60 py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Precision Scoring</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our AI analyzes your resume against industry standards to provide a highly accurate ATS match score.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Skill Extraction</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Automatically identifies your top skills and highlights what's missing for your target roles.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Smart Suggestions</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Receive personalized, actionable feedback to make your resume stand out to recruiters and AI filters.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-8 border-t border-slate-200/60 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} AI Resume Analyzer. Built for the modern job seeker.</p>
      </footer>
    </div>
  );
}
