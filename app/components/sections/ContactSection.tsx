"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import GlitchText from "../effects/GlitchText";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    console.log("📤 Enviando formulário...", formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("📥 Response status:", response.status);

      const data = await response.json();
      console.log("📥 Response data:", data);

      if (response.ok && data.success) {
        console.log("✅ Email enviado com sucesso!");
        setSubmitStatus("success");
        
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("❌ Erro na resposta:", data.error);
        setSubmitStatus("error");
      }

      setTimeout(() => setSubmitStatus("idle"), 5000);
      
    } catch (error) {
      console.error("❌ Erro na requisição:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 border-t-4 border-pure-white">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black font-display mb-4">
            <GlitchText as="span">
              LET&apos;S <span className="text-neon">TALK</span>
            </GlitchText>
          </h2>
          <p className="text-lg text-gray-400 font-mono max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos transformar sua ideia em realidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 border-4 border-pure-white p-8 bg-pure-black relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider mb-2 font-mono">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-2 border-pure-white focus:border-neon outline-none transition-colors font-mono text-pure-white"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2 font-mono">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-2 border-pure-white focus:border-neon outline-none transition-colors font-mono text-pure-white"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-wider mb-2 font-mono">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-2 border-pure-white focus:border-neon outline-none transition-colors font-mono text-pure-white"
                  placeholder="Sobre o que você quer falar?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider mb-2 font-mono">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-2 border-pure-white focus:border-neon outline-none transition-colors font-mono text-pure-white resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-8 py-4 bg-neon text-pure-black font-bold uppercase tracking-wider border-4 border-neon hover:bg-pure-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-display overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </span>
                </button>

                {submitStatus === "success" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-neon font-mono text-sm font-bold"
                  >
                    ✓ Mensagem enviada!
                  </motion.span>
                )}
                {submitStatus === "error" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-500 font-mono text-sm font-bold"
                  >
                    ✗ Erro ao enviar
                  </motion.span>
                )}
              </div>

            </form>

            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-neon" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-neon" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            
            <div className="border-4 border-pure-white p-6 bg-pure-black hover:bg-pure-white hover:text-pure-black transition-all duration-300 group">
              <Mail className="w-8 h-8 text-neon mb-4 group-hover:text-pure-black transition-colors" />
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2 font-display">
                Email
              </h3>
              <a
                href="mailto:kauankelvinfullstack@gmail.com"
                className="text-sm font-mono hover:text-neon transition-colors"
              >
                kauankelvinfullstack@gmail.com
              </a>
            </div>

            <div className="border-4 border-pure-white p-6 bg-pure-black hover:bg-pure-white hover:text-pure-black transition-all duration-300 group">
              <MapPin className="w-8 h-8 text-neon mb-4 group-hover:text-pure-black transition-colors" />
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2 font-display">
                Localização
              </h3>
              <p className="text-sm font-mono">
                São Paulo, Brasil
              </p>
            </div>

            <div className="border-4 border-neon bg-neon p-6 text-pure-black">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4 font-display">
                Redes Sociais
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/kauannkelvinn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-pure-black flex items-center justify-center hover:bg-pure-black hover:text-neon transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/kauannkelvinn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-pure-black flex items-center justify-center hover:bg-pure-black hover:text-neon transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/kevyinwashere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-pure-black flex items-center justify-center hover:bg-pure-black hover:text-neon transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 font-mono text-sm">
            Respondo geralmente em até 24 horas. Vamos criar algo incrível juntos! 🚀
          </p>
        </motion.div>

      </div>
    </section>
  );
}