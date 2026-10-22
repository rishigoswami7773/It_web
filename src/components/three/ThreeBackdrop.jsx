import React, { useEffect, useRef } from 'react';

/**
 * ThreeBackdrop - Constellation Field Component
 * An animated network of glowing connected nodes tinted in teal (#19B5C4) / cyan.
 * - Respects prefers-reduced-motion
 * - Auto-pauses when off-screen (IntersectionObserver)
 * - Interactive cursor gravitational pull and connecting links
 * - Lightweight 60fps HTML5 Canvas/WebGL particle physics
 */
export default function ThreeBackdrop({
  particleColor = "rgba(25, 181, 196, 0.75)",
  lineColor = "rgba(25, 181, 196, 0.18)",
  nodeCount = 45,
  maxDistance = 130,
  speed = 0.5,
  interactive = true,
  className = ""
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    // Responsive particle count
    const actualNodeCount = width < 768 ? Math.floor(nodeCount * 0.45) : nodeCount;

    // Mouse coordinates
    const mouse = {
      x: null,
      y: null,
      radius: 140
    };

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    // Node definition
    class Node {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.radius = Math.random() * 2 + 1.2;
        this.baseRadius = this.radius;
        this.glow = Math.random() * 0.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Interactive mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
            this.radius = this.baseRadius * 1.6;
          } else {
            this.radius = this.baseRadius;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.shadowColor = '#19B5C4';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    }

    const nodes = Array.from({ length: actualNodeCount }, () => new Node());

    // Render loop
    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
      });
    });
    observer.observe(canvas);

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // Connect nodes
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDistance) {
              const opacity = (1 - dist / maxDistance) * 0.45;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.strokeStyle = `rgba(25, 181, 196, ${opacity})`;
              ctx.lineWidth = 0.85;
              ctx.stroke();
            }
          }
        }

        // Connect to mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          for (let i = 0; i < nodes.length; i++) {
            const dx = mouse.x - nodes[i].x;
            const dy = mouse.y - nodes[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
              const opacity = (1 - dist / mouse.radius) * 0.6;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(25, 181, 196, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        // Draw and update each node
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].update();
          nodes[i].draw();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [nodeCount, maxDistance, speed, particleColor, lineColor, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
