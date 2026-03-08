"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundLines = ({
    children,
    className,
    containerClassName,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    return (
        <div
            className={cn(
                "w-full bg-zinc-950 relative",
                containerClassName
            )}
        >
            <div className="absolute inset-0 z-0">
                <svg
                    className="h-full w-full opacity-[0.1]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke="white"
                                strokeWidth="0.5"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            <div className={cn("relative z-10 w-full py-12 md:py-20", className)}>{children}</div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none" />
        </div>
    );
};
