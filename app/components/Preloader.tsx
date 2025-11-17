'use client';

import { motion } from "framer-motion";

export function Preloader() {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep-black"
            exit={{
                opacity: 0,
                y: -50,
            }}
            transition={{
                duration: 0.5,
                ease: 'easeOut',
            }}
        >
            <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-matrix text-3xl text-matrix-light"
            >
                KAUAN KELVIN_
            </motion.div>

        </motion.div>
    )
}