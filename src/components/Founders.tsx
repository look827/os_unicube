import { motion } from "motion/react";
import { User } from "lucide-react";

const founders = [
  {
    name: "Sehajdeep Singh Walia",
    initials: "SSW",
    role: "Co-Founder & Lead Architect",
    bio: "Visionary designer focused on the intersection of human-computer interaction and minimalist aesthetics.",
    image: "https://storage.googleapis.com/static.antigravity.ai/user_files/sehajintheusa@gmail.com/69f78314-e57d-419b-90f7-0847b360a80e/input_file_0.png"
  },
  {
    name: "Jayansh Mahajan",
    initials: "JM",
    role: "Co-Founder & Systems Engineer",
    bio: "Expert in low-level systems and performance optimization, dedicated to making every pixel count.",
    image: "https://storage.googleapis.com/static.antigravity.ai/user_files/sehajintheusa@gmail.com/69f78314-e57d-419b-90f7-0847b360a80e/input_file_0.png"
  }
];

export default function Founders() {
  return (
    <section id="founders" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4 block">The Minds Behind</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">The Architects of UNICUBE</h2>
          </div>
          <p className="text-white/50 max-w-sm text-lg">
            A partnership built on a shared obsession for perfection and the belief that an OS should be as beautiful as it is powerful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div 
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 mb-6 relative flex items-center justify-center">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100 z-10"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
                  <span className="text-8xl font-bold text-white/5 font-mono tracking-tighter select-none">
                    {founder.initials}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-cyan-400 text-black font-mono text-[10px] font-bold px-2 py-1 rounded-sm tracking-widest uppercase shadow-lg z-20">
                  AI
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-cyan-400 font-mono text-sm mb-4 uppercase tracking-wider">{founder.role}</p>
                  <p className="text-white/60 leading-relaxed max-w-md">{founder.bio}</p>
                </div>
                <div className="p-4 rounded-full border border-white/10 group-hover:border-cyan-400 transition-colors">
                  <User size={24} className="text-white/20 group-hover:text-cyan-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
