"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-9999 bg-pure-black flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tighter">
              KAUAN<span className="text-neon">_</span>KELVIN
            </h1>
          </motion.div>

          <div className="w-64 md:w-96">
            <div className="relative h-1 bg-gray-800 border-2 border-pure-white overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-neon"
              />
              
              <motion.div
                animate={{
                  x: [0, 10, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 bg-neon/30"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between items-center mt-4 text-sm font-mono">
              <span className="text-neon">[LOADING]</span>
              <span className="text-pure-white font-bold">{progress}%</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-gray-400 text-sm font-mono"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              INITIALIZING SYSTEMS...
            </motion.span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 400, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="h-px w-full bg-linear-to-r from-transparent via-neon to-transparent opacity-30" />
          </motion.div>

          <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-neon" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-neon" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-neon" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-neon" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}