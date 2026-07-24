import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
  size = "md",
  icon,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:bg-indigo-500",
    secondary:
      "bg-white/5 text-white hover:bg-white/10 backdrop-blur-md border border-white/5",
    outline: "border border-white/10 text-white hover:bg-white/5",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300",
        variants[variant],
        sizes[size],
        disabled
          ? "opacity-60 cursor-not-allowed"
          : "cursor-pointer",
        className
      )}
    >
      {children}
      {icon && <span className="text-xl">{icon}</span>}
    </motion.button>
  );
};