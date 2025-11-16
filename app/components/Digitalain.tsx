'use client';

import { useEffect, useRef } from 'react';

// 1. DEFINIMOS NOSSAS CORES AQUI EM CIMA
// (Baseado no seu globals.css / Tailwind v4)
const MATRIX_GREEN = '#008F11'; // Nosso 'matrix-dark'
const DEEP_BLACK_FADE = 'rgba(3, 10, 4, 0.05)'; // Nosso 'deep-black' com opacidade
const CHARACTERS = 'KAUAN 0101 ABCDE FGHIJK LMNOPQ RSTU VWXYZ 01'; // Mais variedade

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

      // 2. USAMOS NOSSA COR DE FADE
      ctx.fillStyle = DEEP_BLACK_FADE;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 3. USAMOS NOSSA COR DE TEXTO
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

    const interval = setInterval(draw, 50); // Deixei um pouco mais lento (33 -> 50)

    // Ajusta o canvas se a tela mudar de tamanho
    const handleResize = () => {
      if (!canvasRef.current || !ctx) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Limpeza
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 4. ESTA É A GRANDE MUDANÇA DE ESTILO PARA A OPÇÃO A
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-25"
    />
  );
}