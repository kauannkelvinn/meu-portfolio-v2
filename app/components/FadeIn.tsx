'use client';

import { motion } from "framer-motion";
import React from "react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
}

export function FadeIn({ children, className }: FadeInProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
};
