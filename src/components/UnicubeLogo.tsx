import { motion } from "motion/react";

export default function UnicubeLogo({ size = 120, className = "" }: { size?: number, className?: string }) {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
        {/* Top Face - Magenta/Purple */}
        <path d="M50 20 L80 35 L50 50 L20 35 Z" fill="url(#topGradient)" />
        <path d="M50 20 L80 35 L50 50 L20 35 Z" fill="none" stroke="black" strokeWidth="1" />
        
        {/* Right Face - Red/Orange */}
        <path d="M50 50 L80 35 L80 65 L50 80 Z" fill="url(#rightGradient)" />
        <path d="M50 50 L80 35 L80 65 L50 80 Z" fill="none" stroke="black" strokeWidth="1" />
        
        {/* Left Face - Cyan/Green */}
        <path d="M50 50 L20 35 L20 65 L50 80 Z" fill="url(#leftGradient)" />
        <path d="M50 50 L20 35 L20 65 L50 80 Z" fill="none" stroke="black" strokeWidth="1" />

        {/* Grid lines to make it look like a Rubik's cube */}
        <path d="M30 30 L60 45 M40 25 L70 40" stroke="black" strokeWidth="0.5" opacity="0.5" />
        <path d="M60 45 L60 75 M70 40 L70 70" stroke="black" strokeWidth="0.5" opacity="0.5" />
        <path d="M30 40 L30 70 M40 45 L40 75" stroke="black" strokeWidth="0.5" opacity="0.5" />
        
        <defs>
          <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="rightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
