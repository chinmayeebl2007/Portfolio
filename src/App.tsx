import { Navbar } from "@/src/components/layout/Navbar";
import { Footer, ScrollProgress } from "@/src/components/layout/Footer";
import { Hero } from "@/src/sections/Hero";
import { About, Skills } from "@/src/sections/About";
import { Projects } from "@/src/sections/Projects";
import { Experience, Contact } from "@/src/sections/Contact";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { CustomCursor } from "@/src/components/ui/CustomCursor";
import { BackToTop } from "@/src/components/ui/BackToTop";

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] bg-[#030303] flex items-center justify-center"
  >
    <div className="relative">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-16 h-16 border-2 border-purple-500 rounded-2xl"
      />
      <motion.div
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex items-center justify-center font-display font-bold text-lg text-white"
      >
        N
      </motion.div>
    </div>
  </motion.div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative cursor-none md:cursor-auto">
      <CustomCursor />
      <BackToTop />
      
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      
      {/* Background Glows */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
