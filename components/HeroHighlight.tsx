"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroHighlight = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    return (
        <div
            className={cn(
                "relative py-12 md:py-32 w-full group bg-zinc-950 min-h-fit",
                containerClassName
            )}
        >
            <div className="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none" />
            <motion.div
                className="absolute inset-0 bg-dot-thick-indigo-500 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    maskImage: `radial-gradient(250px circle at center, white, transparent)`,
                    WebkitMaskImage: `radial-gradient(250px circle at center, white, transparent)`,
                }}
            />
            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500`,
                className
            )}
        >
            {children}
        </motion.span>
    );
};
