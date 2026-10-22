import React, { useEffect, useState, useRef } from 'react';

/**
 * MouseGlowFollower Component
 * Provides:
 * 1. An ambient glowing cursor follower with fluid spring damping.
 * 2. An interactive magnetic target reticle that expands when hovering over buttons, links, cards, & inputs.
 * 3. Atmospheric flashlight aura that subtly illuminates content under the mouse.
 * 4. Real-time dynamic mouse tracking on cards (--mouse-x, --mouse-y) for interactive spotlight effects.
 * 5. Automatically disabled on touch screens for 100% mobile responsiveness.
 */
export default function MouseGlowFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position references for requestAnimationFrame lerp
  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const auraPos = useRef({ x: -200, y: -200 });

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const auraRef = useRef(null);
  const animFrameId = useRef(null);

  useEffect(() => {
    // Check if device is touch-only
    const hasTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (hasTouch) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Card Spotlight: Update relative coordinates on hovered cards
      const targetCard = e.target.closest('.card-hover-unique, .card-spotlight, .card-hover-dark');
      if (targetCard) {
        const rect = targetCard.getBoundingClientRect();
        targetCard.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        targetCard.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Interactive element hover detection
    const handleOver = (e) => {
      const isInteractive = e.target.closest(
        'a, button, input, textarea, select, label, [role="button"], .card-hover-unique, .tag-pill-hover, .interactive-item'
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth 60fps animation loop with linear interpolation (lerp)
    const animate = () => {
      // 1. Instant dot tracking
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // 2. Spring-damped follower ring (lerp factor: 0.18)
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.18;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
      }

      // 3. Smooth atmospheric background aura (lerp factor: 0.08)
      auraPos.current.x += (mousePos.current.x - auraPos.current.x) * 0.08;
      auraPos.current.y += (mousePos.current.y - auraPos.current.y) * 0.08;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${auraPos.current.x}px, ${auraPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 overflow-hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Large Ambient Atmospheric Flashlight / Spotlight */}
      <div
        ref={auraRef}
        className="absolute top-0 left-0 -ml-48 -mt-48 w-96 h-96 rounded-full bg-gradient-to-r from-[#19B5C4]/10 via-[#38BDF8]/6 to-transparent blur-3xl pointer-events-none will-change-transform"
      />

      {/* 2. Fluid Spring Follower Ring / Interactive Reticle */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 -ml-5 -mt-5 w-10 h-10 rounded-full border transition-all duration-200 ease-out will-change-transform flex items-center justify-center ${
          isClicked
            ? 'scale-75 border-[#19B5C4] bg-[#19B5C4]/30 shadow-[0_0_15px_#19B5C4]'
            : isHovered
            ? 'scale-175 border-[#19B5C4] bg-[#19B5C4]/15 shadow-[0_0_25px_rgba(25,181,196,0.5)]'
            : 'scale-100 border-[#19B5C4]/60 bg-[#19B5C4]/5 shadow-[0_0_15px_rgba(25,181,196,0.25)]'
        }`}
      >
        {isHovered && (
          <div className="w-1.5 h-1.5 rounded-full bg-[#19B5C4] animate-ping opacity-75" />
        )}
      </div>

      {/* 3. Center Precision Glow Dot */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 -ml-1.5 -mt-1.5 w-3 h-3 rounded-full bg-[#19B5C4] shadow-[0_0_10px_#19B5C4] transition-transform duration-100 ease-out will-change-transform ${
          isHovered ? 'scale-75 bg-[#0B2A5B]' : 'scale-100'
        }`}
      />
    </div>
  );
}
