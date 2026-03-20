import { motion } from "motion/react";
import { User, ArrowRight } from "lucide-react";
import UnicubeLogo from "./UnicubeLogo";

export default function LoginPreview() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Design Stripes in background */}
      <div className="absolute inset-0 flex opacity-10 pointer-events-none">
        <div className="flex-1 bg-cyan-500" />
        <div className="flex-1 bg-blue-500" />
        <div className="flex-1 bg-purple-500" />
        <div className="flex-1 bg-magenta-500" />
        <div className="flex-1 bg-red-500" />
        <div className="flex-1 bg-orange-500" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4 block">Security & Access</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Secure by Design</h2>
          <p className="text-white/60 text-xl leading-relaxed">
            UNICUBE's login experience is more than just a gateway. It's a seamless transition into your unique digital environment, protected by state-of-the-art encryption and minimalist aesthetics.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-md aspect-[4/5] bg-zinc-900/80 backdrop-blur-xl rounded-[40px] border border-white/10 p-12 flex flex-col items-center shadow-2xl"
        >
          <UnicubeLogo size={80} className="mb-6" />
          <h3 className="text-3xl font-bold mb-12 tracking-tight">UNICUBE</h3>

          <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center mb-12 border border-white/5">
            <User size={40} className="text-white/40" />
          </div>

          <div className="w-full space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 ml-1">Username</label>
              <div className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white/20">
                Sehajdeep
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 ml-1">Password</label>
              <div className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white/20 flex gap-1">
                {"•••••".split("").map((dot, i) => <span key={i}>{dot}</span>)}
              </div>
            </div>
          </div>

          <button className="w-full mt-12 bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all group">
            Sign in <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="mt-6 text-white/30 hover:text-white transition-colors text-sm font-medium">
            Forgot password?
          </button>
        </motion.div>
      </div>
    </section>
  );
}
