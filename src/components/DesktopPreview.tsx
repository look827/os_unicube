import { motion } from "motion/react";
import { Search, Settings, LayoutGrid, Globe, Trash2, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function DesktopPreview() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const icons = [
    { name: "Explorer", icon: <LayoutGrid className="text-cyan-400" size={32} />, color: "bg-zinc-900" },
    { name: "Browser", icon: <Globe className="text-purple-400" size={32} />, color: "bg-zinc-900" },
    { name: "Settings", icon: <Settings className="text-zinc-400" size={32} />, color: "bg-zinc-900" },
    { name: "Recycle Bin", icon: <Trash2 className="text-blue-400" size={32} />, color: "bg-zinc-900" },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4 block">Experience UNICUBE</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">A Pro Interface for Pro Users</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#050505]"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(6, 182, 212, 0.05) 0%, transparent 50%, rgba(239, 68, 68, 0.05) 100%)"
          }}
        >
          {/* Top Bar */}
          <div className="absolute top-6 right-8 flex items-center gap-2 text-white/60 font-mono text-sm">
            <div className="w-4 h-4 rounded-full border border-white/40" />
            <span>{formatTime(time)}</span>
          </div>

          {/* Desktop Icons */}
          <div className="absolute inset-0 flex items-center justify-center gap-12 md:gap-20">
            {icons.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center shadow-lg border border-white/5 group-hover:border-white/20 transition-all`}>
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{item.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-24 flex flex-col items-center opacity-20 pointer-events-none">
            <div className="text-6xl font-bold tracking-tighter">UNICUBE</div>
          </div>

          {/* Taskbar */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-black/40 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-6">
            <div className="flex items-center gap-4 bg-white/5 rounded-lg px-4 py-2 border border-white/10 w-64">
              <Search size={16} className="text-white/40" />
              <span className="text-sm text-white/20 font-mono">Search</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                <LayoutGrid size={20} className="text-cyan-400" />
              </div>
              <div className="p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                <Globe size={20} className="text-purple-400" />
              </div>
              <div className="p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                <Settings size={20} className="text-zinc-400" />
              </div>
            </div>

            <div className="w-64" /> {/* Spacer */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
