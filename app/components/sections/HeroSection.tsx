"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import GlitchText from "../effects/GlitchText";

const ROLES = [
  "FULL STACK DEVELOPER",
  "FRONTEND SPECIALIST",
  "UI/UX ENTHUSIAST",
  "PROBLEM SOLVER"
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []); 

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl w-full relative z-10">
        <div className="space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter font-display">
              <GlitchText as="span" intensity="low">
                KAUAN
              </GlitchText>
              <br />
              <GlitchText as="span" intensity="low">
                <span className="text-neon">KELVIN</span>
              </GlitchText>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-24 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <h2 className="text-3xl md:text-5xl font-bold font-display text-pure-white border-l-4 border-neon pl-6">
                  {ROLES[currentRole]}
                </h2>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-mono">
              Desenvolvedor apaixonado por criar experiências digitais modernas e funcionais. 
              Especializado em <span className="text-neon font-bold">React</span>, 
              <span className="text-neon font-bold"> Next.js</span> e 
              <span className="text-neon font-bold"> Node.js</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-neon text-pure-black font-bold uppercase tracking-wider border-4 border-pure-black hover:bg-pure-white transition-all duration-200 overflow-hidden"
            >
              <span className="relative z-10 font-display">Ver Projetos</span>
              <motion.div
                className="absolute inset-0 bg-pure-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 border-4 border-pure-white font-bold uppercase tracking-wider hover:bg-pure-white hover:text-pure-black transition-all duration-200 font-display"
            >
              Entrar em Contato
            </a>

            <div className="flex gap-3 items-center ml-4">
              <a
                href="https://github.com/kauannkelvinn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-pure-white flex items-center justify-center hover:bg-neon hover:border-neon transition-all duration-200 group"
              >
                <Github className="w-5 h-5 group-hover:text-pure-black transition-colors" />
              </a>
              
              <a
                href="https://linkedin.com/in/kauannkelvinn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-pure-white flex items-center justify-center hover:bg-neon hover:border-neon transition-all duration-200 group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-pure-black transition-colors" />
              </a>
              
              <a
                href="mailto:kauankelvinfullstack@gmail.com"
                className="w-12 h-12 border-2 border-pure-white flex items-center justify-center hover:bg-neon hover:border-neon transition-all duration-200 group"
              >
                <Mail className="w-5 h-5 group-hover:text-pure-black transition-colors" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-10 w-32 h-32 border-4 border-neon hidden lg:block pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-10 w-24 h-24 bg-neon hidden lg:block pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-mono text-gray-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-5 h-5 text-neon" />
        </motion.div>
      </motion.div>
    </section>
  );
}