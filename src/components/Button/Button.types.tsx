import { ReactNode } from "react";

export type ButtonProps = {
    children: ReactNode;
    className?: string;
    isLoading?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}