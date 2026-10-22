import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
  dark = false,
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
          dark ? 'bg-[#19B5C4]/20 text-[#19B5C4] border border-[#19B5C4]/30' : 'bg-[#E8F9FB] text-[#0A8895] border border-[#19B5C4]/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#19B5C4] animate-ping" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-heading leading-tight ${
        dark ? 'text-white' : 'text-[#0B2A5B]'
      }`}>
        {title} {highlight && (
          <span className="text-[#19B5C4] relative inline-block">
            {highlight}
            <span className="absolute bottom-1 left-0 w-full h-1 bg-[#19B5C4]/30 rounded-full"></span>
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
