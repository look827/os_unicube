import { motion } from "motion/react";
import UnicubeLogo from "./UnicubeLogo";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      
      {/* Animated Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full z-0"
      />

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <UnicubeLogo size={200} className="mb-12" />
          <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-none mb-6">
            UNICUBE
          </h1>
          <p className="text-xl md:text-3xl font-light tracking-tight text-white/70 max-w-2xl mx-auto">
            Unique. Every single pixel is unique.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a href="#coming-soon" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-cyan-400 transition-colors duration-300">
            Explore Roadmap
          </a>
          <a href="#feedback" className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors duration-300">
            Shape the Future
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
