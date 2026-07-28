import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { PORTFOLIO_CONTENT } from "@/src/constants/content";
import { Button } from "@/src/components/ui/Button";

const Particle = ({ i }: { i: number }) => {
  const size = Math.random() * 4 + 1;
  const initialX = Math.random() * 100;
  const initialY = Math.random() * 100;

  return (
    <motion.div
      className="absolute bg-purple-500/20 rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        y: [0, -100, 0],
        x: [0, Math.random() * 50 - 25, 0],
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "linear",
        delay: i * 0.1,
      }}
    />
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

        {[...Array(30)].map((_, i) => (
          <Particle key={i} i={i} />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-8 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full"
          >
            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">
              Available for Internship
            </span>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src="/Profileimage.jpeg"
              alt="Chinmayee"
              className="w-36 h-36 rounded-full object-cover border-4 border-indigo-500 shadow-xl"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text">
              {PORTFOLIO_CONTENT.name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-8"
          >
            {PORTFOLIO_CONTENT.title}
          </motion.h2>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Button
              size="lg"
              icon={<ArrowRight size={18} />}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              VIEW PROJECTS
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                window.open(PORTFOLIO_CONTENT.resumeUrl, "_blank")
              }
            >
              RESUME
            </Button>

            <Button
              variant="secondary"
              size="lg"
              icon={<Calendar size={18} />}
              onClick={() =>
                window.open(PORTFOLIO_CONTENT.booking, "_blank")
              }
            >
              BOOK A MEETING
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6"
          >
            <a
              href={PORTFOLIO_CONTENT.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>

            <a
              href={PORTFOLIO_CONTENT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>

            <a href={`mailto:${PORTFOLIO_CONTENT.email}`}>
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};