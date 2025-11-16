'use client';

import { useEffect, useRef } from 'react';

const MATRIX_GREEN = '#008F11'; 
const DEEP_BLACK_FADE = 'rgba(3, 10, 4, 0.05)';
const CHARACTERS = 'KAUAN 0101 ABCDE FGHIJK LMNOPQ RSTU VWXYZ 01';

export default function DigitalRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }).map(
      () => Math.random() * canvas.height
    );

    ctx.font = `${fontSize}px monospace`;

    function draw() {
      if (!canvas || !ctx) return;

      ctx.fillStyle = DEEP_BLACK_FADE;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = MATRIX_GREEN;
      drops.forEach((y, i) => {
        const text =
          CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += fontSize;
      });
    }

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      if (!canvasRef.current || !ctx) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-25"
    />
  );
}