"use client";

import { useWordStore } from "../../store";

import Button from "../Button/Button";

export default function WordPicker() {
    const setRandomWord = useWordStore((state) => state.setRandomWord);

    return (
        <div className="flex items-center justify-center">
            <Button
                onClick={setRandomWord}
                className="fixed left-1/2 -translate-x-1/2 bottom-12"
            >
                Koekenbak
            </Button>
        </div>
    );
};