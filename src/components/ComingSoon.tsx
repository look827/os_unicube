import { motion } from "motion/react";
import { Rocket, Shield, Zap, Cpu } from "lucide-react";

const features = [
  {
    icon: <Zap size={24} />,
    title: "Instant Response",
    desc: "A kernel designed for zero-latency interactions."
  },
  {
    icon: <Shield size={24} />,
    title: "Privacy First",
    desc: "End-to-end encryption baked into the core of the OS."
  },
  {
    icon: <Cpu size={24} />,
    title: "Efficient Core",
    desc: "Optimized for modern silicon, maximizing battery and power."
  },
  {
    icon: <Rocket size={24} />,
    title: "Fluid UI",
    desc: "Every animation is 120fps, every pixel is unique."
  }
];

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="py-32 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4 block">Coming Soon</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">The Alpha Phase is Approaching</h2>
            <p className="text-white/60 text-xl leading-relaxed mb-12">
              We are currently in deep development, refining the core architecture. UNICUBE isn't just an OS; it's a statement. Join the waitlist to be among the first to experience the revolution.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-cyan-400 shrink-0">{f.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-white/40">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 p-8 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 border-2 border-dashed border-cyan-400/30 rounded-full flex items-center justify-center"
              >
                <div className="w-48 h-48 border-2 border-cyan-400/50 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-cyan-400 rounded-full blur-2xl opacity-20" />
                </div>
              </motion.div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                <span className="text-4xl md:text-5xl font-bold mb-2">Aug 20, 2027</span>
                <span className="font-mono text-sm uppercase tracking-[0.4em] text-white/40">Release Date</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
