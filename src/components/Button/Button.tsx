"use client";

import { ButtonProps } from "./Button.types";

export default function Button({
    children = null,
    className = "",
    type = "button",
    isLoading = false,
    onClick = () => null,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={isLoading}
            className={className}
        >
            <span className="font-display uppercase tracking-wide text-lg group flex items-center justify-center text-neutral-500 hover:text-rose-500 shadow-xl h-14 px-6 rounded-full transition-colors border border-neutral-500 hover:border-rose-500 bg-neutral-900">
                { children }
            </span>
        </button>
    );
};
