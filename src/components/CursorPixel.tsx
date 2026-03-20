import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CursorPixel() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 w-4 h-4 bg-cyan-400 mix-blend-difference pointer-events-none z-[9999]"
      animate={{ 
        x: mousePos.x - 8,
        y: mousePos.y - 8,
        rotate: mousePos.x + mousePos.y
      }}
      transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.5 }}
    />
  );
}
