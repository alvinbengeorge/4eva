"use client";
import { useState, useEffect } from "react";

export default function Typewriter({ words }: { words: string }) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < words.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + words[index]);
                setIndex((prev) => prev + 1);
            }, 10);
            return () => clearTimeout(timeout);
        }
    }, [index, words]);

    return <span>{displayedText}</span>;
}