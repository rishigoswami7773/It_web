import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StatCounter({ targetNumber, suffix = "+", title, icon: Icon, delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      // Easing out cubic
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.min(Math.round(easeOut * targetNumber), targetNumber);
      
      setCount(current);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="relative group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-[#19B5C4]/60 hover:bg-white/15 transition-all duration-300 shadow-xl overflow-hidden"
    >
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#19B5C4]/10 rounded-full blur-xl group-hover:bg-[#19B5C4]/20 transition-all"></div>
      
      <div className="flex items-center gap-4">
        {Icon && (
          <div className="w-14 h-14 rounded-xl bg-[#19B5C4]/20 border border-[#19B5C4]/30 flex items-center justify-center text-[#19B5C4] group-hover:scale-110 group-hover:bg-[#19B5C4] group-hover:text-[#0B2A5B] transition-all duration-300">
            <Icon className="w-7 h-7" />
          </div>
        )}
        <div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight flex items-baseline gap-1">
            <span>{count.toLocaleString()}</span>
            <span className="text-[#19B5C4]">{suffix}</span>
          </div>
          <div className="text-slate-300 font-medium text-xs sm:text-sm mt-1 uppercase tracking-wider">
            {title}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
