"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Database, Globe } from "lucide-react";
import GlitchText from "../effects/GlitchText";

interface SkillCategory {
  icon: typeof Code2;
  name: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: Code2,
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    icon: Database,
    name: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs"],
  },
  {
    icon: Palette,
    name: "UI/UX",
    skills: ["Figma", "TailwindCSS", "Framer Motion", "Responsive Design", "Prototyping"],
  },
  {
    icon: Zap,
    name: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "CI/CD"],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 border-t-4 border-pure-white bg-gray-dark">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black font-display mb-4">
            <GlitchText as="span">
              ABOUT <span className="text-neon">ME</span>
            </GlitchText>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 border-4 border-pure-white p-8 bg-pure-black"
          >
            <div className="space-y-6">
              
              <div className="border-l-4 border-neon pl-6">
                <h3 className="text-3xl font-bold font-display mb-2">
                  Desenvolvedor Full Stack
                </h3>
                <p className="text-neon text-sm uppercase tracking-wider font-mono">
                  São Paulo, Brasil
                </p>
              </div>

              <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
                <p>
                  Olá! Sou Kauan Kelvin, desenvolvedor full stack apaixonado por criar 
                  experiências digitais que fazem a diferença. Com mais de 2 anos de 
                  experiência, transformo ideias em produtos funcionais e escaláveis.
                </p>
                <p>
                  Minha jornada começou com HTML e CSS, e desde então não parei de 
                  aprender. Hoje trabalho principalmente com <span className="text-neon font-bold">React</span>, 
                  <span className="text-neon font-bold"> Next.js</span> e 
                  <span className="text-neon font-bold"> Node.js</span>, sempre buscando 
                  as melhores práticas e tecnologias mais recentes.
                </p>
                <p>
                  Acredito que código limpo, design intuitivo e performance são 
                  fundamentais para criar produtos de qualidade. Quando não estou 
                  codando, você me encontra estudando novas tecnologias, contribuindo 
                  em projetos open source ou compartilhando conhecimento com a comunidade.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-gray-800">
                <div>
                  <div className="text-3xl font-black font-display text-neon">2+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-mono">
                    Anos Exp.
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black font-display text-neon">20+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-mono">
                    Projetos
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black font-display text-neon">10+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-mono">
                    Clientes
                  </div>
                </div>
              </div>

            </div>

            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-neon" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-neon" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-4 border-pure-white p-8 bg-neon text-pure-black relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-display mb-6">
                {"LET'S WORK"}<br />TOGETHER
              </h3>
              
              <p className="font-mono text-sm mb-6 leading-relaxed">
                Disponível para projetos freelance e oportunidades full-time.
              </p>

              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-pure-black text-pure-white border-4 border-pure-black hover:bg-pure-white hover:text-pure-black transition-all font-bold uppercase tracking-wider text-sm font-display"
              >
                Get in Touch
              </a>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-pure-black opacity-20"
            />
          </motion.div>

        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-8 border-l-4 border-neon pl-6"
          >
            EXPERTISE
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((category, index) => {
              const Icon = category.icon;
              
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group border-4 border-pure-white p-6 bg-pure-black hover:bg-pure-white hover:text-pure-black transition-all duration-300"
                >
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-neon group-hover:text-pure-black transition-colors" />
                  </div>

                  <h4 className="text-xl font-bold font-display mb-4 uppercase tracking-tight">
                    {category.name}
                  </h4>

                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm font-mono"
                      >
                        <span className="w-2 h-2 bg-neon group-hover:bg-pure-black" />
                        {skill}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-neon group-hover:border-pure-black transition-colors" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 font-mono text-lg">
            Curioso para saber mais?
          </p>
          <a
            href="/"
            download
            className="inline-flex items-center gap-3 px-8 py-4 border-4 border-neon bg-neon text-pure-black hover:bg-pure-white transition-all duration-200 font-bold uppercase tracking-wider font-display"
          >
            <Globe className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}