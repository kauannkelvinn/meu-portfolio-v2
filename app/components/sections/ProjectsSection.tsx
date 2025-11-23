"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import GlitchText from "../effects/GlitchText";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

// Seus projetos (CUSTOMIZE AQUI!)
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com painel admin, carrinho, checkout e integração com Stripe.",
    category: "Full Stack",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    githubUrl: "https://github.com/seu-user/projeto",
    liveUrl: "https://projeto.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Dashboard interativo com gráficos em tempo real e visualização de dados complexos.",
    category: "Frontend",
    tags: ["React", "D3.js", "TailwindCSS"],
    githubUrl: "https://github.com/seu-user/projeto",
    featured: true,
  },
  {
    id: 3,
    title: "API REST Finance",
    description: "API robusta para gestão financeira com autenticação JWT e documentação Swagger.",
    category: "Backend",
    tags: ["Node.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/seu-user/projeto",
  },
  {
    id: 4,
    title: "Design System",
    description: "Sistema de design completo com componentes reutilizáveis e documentação Storybook.",
    category: "UI/UX",
    tags: ["React", "Storybook", "Figma"],
    githubUrl: "https://github.com/seu-user/projeto",
    liveUrl: "https://storybook.app",
  },
  {
    id: 5,
    title: "Task Manager",
    description: "Gerenciador de tarefas com drag & drop, filtros e sincronização em tempo real.",
    category: "Full Stack",
    tags: ["React", "Firebase", "DnD Kit"],
    liveUrl: "https://tasks.app",
  },
  {
    id: 6,
    title: "Portfolio Template",
    description: "Template de portfolio moderno e responsivo com animações suaves.",
    category: "Frontend",
    tags: ["Next.js", "Framer Motion", "TailwindCSS"],
    githubUrl: "https://github.com/seu-user/projeto",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 border-t-4 border-pure-white">
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
              SELECTED <span className="text-neon">WORK</span>
            </GlitchText>
          </h2>
          <p className="text-lg text-gray-400 font-mono max-w-2xl">
            Alguns projetos que desenvolvi recentemente. Cada um com seu próprio desafio e solução única.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                group relative border-4 border-pure-white p-6 
                hover:bg-pure-white hover:text-pure-black 
                transition-all duration-300 cursor-pointer
                ${project.featured ? 'lg:col-span-2 lg:row-span-2' : ''}
              `}
            >
              {/* Badge de categoria */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 text-xs uppercase tracking-wider font-bold bg-neon text-pure-black font-mono">
                  {project.category}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="relative z-10 h-full flex flex-col">
                
                {/* Título */}
                <h3 className="text-2xl md:text-3xl font-bold font-display mb-3 group-hover:text-pure-black transition-colors">
                  {project.title}
                </h3>

                {/* Descrição */}
                <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-700 mb-6 grow font-mono leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border-2 border-current text-xs uppercase tracking-wider font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-current hover:bg-neon hover:text-pure-black hover:border-neon transition-all text-sm font-bold uppercase tracking-wider font-mono"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-neon text-pure-black border-2 border-neon hover:bg-pure-white transition-all text-sm font-bold uppercase tracking-wider font-mono"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>

              <motion.div
                className="absolute bottom-0 right-0 w-24 h-24 bg-neon -z-10"
                initial={{ width: "6rem", height: "6rem" }}
                whileHover={{ width: "100%", height: "100%" }}
                transition={{ duration: 0.5 }}
              />

              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-neon group-hover:border-pure-black transition-colors" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-neon group-hover:border-pure-black transition-colors" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 font-mono">
            Quer ver mais? Confira meu GitHub!
          </p>
          <a
            href="https://github.com/kauannkelvin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-4 border-pure-white hover:bg-pure-white hover:text-pure-black transition-all duration-200 font-bold uppercase tracking-wider font-display"
          >
            <Github className="w-5 h-5" />
            Ver Todos os Projetos
          </a>
        </motion.div>

      </div>
    </section>
  );
}