"use client";

import { useState } from "react";

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  glitchOnHover?: boolean;
  intensity?: "low" | "medium" | "high";
}

export default function GlitchText({ 
  children, 
  className = "", 
  as: Component = "span",
  glitchOnHover = true,
  intensity = "medium"
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  const intensityValues = {
    low: { x: 2, y: 1 },
    medium: { x: 4, y: 2 },
    high: { x: 8, y: 4 }
  };

  const { x, y } = intensityValues[intensity];

  const handleMouseEnter = () => {
    if (glitchOnHover) {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 400);
    }
  };

  return (
    <Component 
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      <span className="relative z-10">{children}</span>

      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 w-full text-red-500 opacity-70 pointer-events-none animate-glitch-1"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              animation: "glitch-1 0.3s infinite"
            }}
            aria-hidden="true"
          >
            {children}
          </span>

          <span 
            className="absolute top-0 left-0 w-full text-cyan-500 opacity-70 pointer-events-none animate-glitch-2"
            style={{
              clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0 100%)",
              animation: "glitch-2 0.3s infinite"
            }}
            aria-hidden="true"
          >
            {children}
          </span>

          <span 
            className="absolute top-0 left-0 w-full text-neon opacity-50 pointer-events-none animate-glitch-3"
            style={{
              clipPath: "polygon(0 45%, 100% 45%, 100% 60%, 0 60%)",
              animation: "glitch-3 0.3s infinite"
            }}
            aria-hidden="true"
          >
            {children}
          </span>
        </>
      )}

      <style jsx>{`
        @keyframes glitch-1 {
          0% { transform: translate(0); }
          20% { transform: translate(-${x}px, ${y}px); }
          40% { transform: translate(-${x}px, -${y}px); }
          60% { transform: translate(${x}px, ${y}px); }
          80% { transform: translate(${x}px, -${y}px); }
          100% { transform: translate(0); }
        }

        @keyframes glitch-2 {
          0% { transform: translate(0); }
          20% { transform: translate(${x}px, -${y}px); }
          40% { transform: translate(${x}px, ${y}px); }
          60% { transform: translate(-${x}px, -${y}px); }
          80% { transform: translate(-${x}px, ${y}px); }
          100% { transform: translate(0); }
        }

        @keyframes glitch-3 {
          0% { transform: translate(0); }
          25% { transform: translate(${x * 0.5}px, -${y * 0.5}px); }
          50% { transform: translate(-${x * 0.5}px, ${y * 0.5}px); }
          75% { transform: translate(${x * 0.5}px, ${y * 0.5}px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </Component>
  );
}