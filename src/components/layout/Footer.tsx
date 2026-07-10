import { motion, useScroll, useSpring } from "motion/react";
import { PORTFOLIO_CONTENT } from "@/src/constants/content";

export const Footer = () => {
  return (
    <footer className="h-12 shrink-0 flex items-center justify-between px-6 border-t border-white/5 bg-bg-dark/80 backdrop-blur-md">
      <div className="flex gap-6">
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> SYSTEM: ONLINE
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500 uppercase tracking-widest hidden md:flex">
          LATENCY: 12ms
        </div>
      </div>
      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest flex gap-4">
        <a href={PORTFOLIO_CONTENT.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
        <a href={PORTFOLIO_CONTENT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        <span className="text-white/20">|</span>
        <span>&copy; {new Date().getFullYear()} {PORTFOLIO_CONTENT.name.split(' ')[0]}</span>
      </div>
    </footer>
  );
};

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};
