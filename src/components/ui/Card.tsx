import { motion } from "motion/react";
import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverGlow?: boolean;
  className?: string; // Explicitly add to satisfy some stricter tsc configs
  key?: any;
}

export const Card = ({ children, className, hoverGlow = true, ...props }: CardProps) => {
  return (
    <motion.div
      whileHover={hoverGlow ? { y: -5 } : {}}
      className={cn(
        "glass-card p-6 relative overflow-hidden group",
        className
      )}
      {...props}
    >
      {/* Glow Effect */}
      {hoverGlow && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
