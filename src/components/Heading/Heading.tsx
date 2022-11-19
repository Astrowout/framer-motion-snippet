"use client";

import { AnimatePresence, motion } from "framer-motion";

import { headerAnim, layoutTransition, textAnim } from "./Heading.animation";
import { useEffect, useState } from "react";
import { useWordStore } from "../../store";

export default function Heading() {
    const word = useWordStore((state) => state.word);
    const customWord = useWordStore((state) => state.customWord);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    
        return () => {
            setMounted(false);
        }
    }, []);

    return (
        <div className="flex items-center justify-center">
            <AnimatePresence
                mode="wait"
                custom={!customWord}
            >
                <motion.header
                    variants={headerAnim}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={word}
                    layout
                    custom={!customWord}
                    layoutDependency={mounted}
                    style={{
                        position: mounted ? "static" : "fixed",
                        width: mounted ? "auto" : "100%",
                        height: mounted ? "auto" : "100%",
                        borderRadius: mounted ? "4px" : "0px",
                    }}
                    transition={layoutTransition}
                    className="z-10 text-3xl origin-center sm:text-5xl md:text-6xl inset-0 overflow-hidden text-center flex items-center justify-center font-display tracking-wide bg-rose-700 shadow-xl"
                >
                    <motion.h1
                        variants={textAnim}
                        className="block whitespace-nowrap text-white uppercase pt-2 sm:pt-3 px-4 pb-1"
                    >
                        { word }
                    </motion.h1>
                </motion.header>
            </AnimatePresence>
        </div>
    );
};