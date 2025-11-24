"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

interface FadeInScrollProps {
  children?: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  className?: string;
}

export default function FadeInScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  threshold = 0.1,
  className = "",
}: FadeInScrollProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold,
    triggerOnce: true 
  });

  // Define a direção da animação
  const directionVariants = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{
        opacity: 0,
        ...directionVariants[direction],
      }}
      animate={
        isVisible
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {
              opacity: 0,
              ...directionVariants[direction],
            }
      }
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}