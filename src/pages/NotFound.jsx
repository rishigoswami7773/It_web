import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Sparkles, MessageCircle } from 'lucide-react';
import ThreeBackdrop from '../components/three/ThreeBackdrop';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#071A38] text-white relative overflow-hidden px-4">
      {/* ThreeBackdrop Constellation */}
      <ThreeBackdrop
        nodeCount={45}
        maxDistance={130}
        speed={0.4}
        className="opacity-70"
      />

      <div className="max-w-xl mx-auto text-center relative z-10 py-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Page Not Found</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-[#19B5C4] to-white tracking-tighter leading-none mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
          Lost in the Digital Cosmos?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed mb-8">
          The page you are looking for might have been moved, renamed, or is under active engineering maintenance.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-[#19B5C4] hover:bg-[#149BA8] text-[#071A38] font-bold text-sm shadow-lg shadow-[#19B5C4]/25 inline-flex items-center gap-2 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore IT Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
