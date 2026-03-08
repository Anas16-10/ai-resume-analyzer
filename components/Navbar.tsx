"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    return (
        <nav className="w-full border-b border-slate-200/60 bg-white/50 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
                >
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
                        <span className="text-white font-bold text-lg">A</span>
                    </div>

                    <span className="text-xl font-bold tracking-tight text-slate-800">
                        AI Resume <span className="text-indigo-600">Analyzer</span>
                    </span>
                </Link>

                {/* Right Side Buttons */}
                <div className="flex items-center gap-4">
                    <Link
                        href="https://anas-portfolio-eta.vercel.app/"
                        target="_blank"
                        className={cn(
                            buttonVariants({ variant: "ghost", size: "sm" }),
                            "hidden sm:flex text-slate-600"
                        )}
                    >
                        About
                    </Link>

                    <Link
                        href="https://github.com/Anas16-10"
                        target="_blank"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "sm" }),
                            "gap-2 border-slate-200 text-slate-700 hover:bg-slate-50"
                        )}
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </Link>
                </div>

            </div>
        </nav>
    );
};