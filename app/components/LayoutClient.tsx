'use client';

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Preloader } from "./Preloader";

interface LayoutClientProps {
    children: React.ReactNode;
}

export function LayoutClient({ children }: LayoutClientProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <AnimatePresence>
                {isLoading && <Preloader />}
            </AnimatePresence>

            {!isLoading && children}
        </>
    )
}