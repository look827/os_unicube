/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Founders from "./components/Founders";
import ComingSoon from "./components/ComingSoon";
import FeedbackForm from "./components/FeedbackForm";
import CursorPixel from "./components/CursorPixel";
import DesktopPreview from "./components/DesktopPreview";
import LoginPreview from "./components/LoginPreview";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-400 selection:text-black">
      <CursorPixel />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-2xl tracking-tighter"
        >
          UNICUBE
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex gap-12 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60"
        >
          <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#preview" className="hover:text-cyan-400 transition-colors">Interface</a>
          <a href="#founders" className="hover:text-cyan-400 transition-colors">Architects</a>
          <a href="#coming-soon" className="hover:text-cyan-400 transition-colors">Roadmap</a>
          <a href="#feedback" className="hover:text-cyan-400 transition-colors">Feedback</a>
        </motion.div>

        <div className="md:hidden">
          {/* Mobile menu could go here */}
        </div>
      </nav>

      <main>
        <Hero />
        <div id="preview">
          <DesktopPreview />
          <LoginPreview />
        </div>
        <Founders />
        <ComingSoon />
        <FeedbackForm />
      </main>

      <footer className="py-20 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 tracking-tighter">UNICUBE</h3>
            <p className="text-white/40 max-w-xs">Every pixel is unique. The next generation of operating system design.</p>
          </div>
          
          <div className="flex gap-12 font-mono text-[10px] uppercase tracking-widest text-white/40">
            <div className="flex flex-col gap-4">
              <span className="text-white/80">Social</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Discord</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white/80">Legal</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center text-white/20 font-mono text-[10px] uppercase tracking-widest">
          © 2026 UNICUBE OS. Designed by Sehajdeep & Jayansh.
        </div>
      </footer>
    </div>
  );
}

