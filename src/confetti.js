// Lightweight canvas confetti (no external packages)
// Usage from React: <Confetti active={bool} onDone={()=>{}} />
// This is a plain JS module (not JSX).

let _raf = null;
let _resizeBound = false;

export function fireConfetti(canvas, opts = {}) {
  if (!canvas) return;
  const {
    particles = 160,
    spread = Math.PI / 2,
    origin = { x: 0.5, y: 0.3 },
    gravity = 0.16,
    decay = 0.008,
    scalar = 1,
    duration = 1600
  } = opts;

  const ctx = canvas.getContext?.('2d');
  if (!ctx) return;

  const DPR = Math.max(1, window.devicePixelRatio || 1);

  const resize = () => {
    canvas.width = Math.floor(window.innerWidth * DPR);
    canvas.height = Math.floor(window.innerHeight * DPR);
    canvas.style.width = '100%';
    canvas.style.height = '100%';
  };
  resize();

  if (_raf) cancelAnimationFrame(_raf);

  const W = canvas.width, H = canvas.height;
  const cx = W * (origin.x ?? 0.5);
  const cy = H * (origin.y ?? 0.3);

  const colours = [
    '#7cc0ff', '#8a7cff', '#ffd36a', '#99e6a8',
    '#ff6b6b', '#b6d9ff', '#ffb0c5', '#a6f0c8'
  ];

  const ps = [];
  for (let i = 0; i < particles; i++) {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * spread;
    const speed = (8 + Math.random() * 6) * DPR * scalar;
    ps.push({
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      w: (4 + Math.random() * 4) * DPR,
      h: (8 + Math.random() * 10) * DPR,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.2,
      c: colours[(Math.random() * colours.length) | 0],
      life: 1
    });
  }

  const start = performance.now();

  const step = (now) => {
    const t = now - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ps.forEach(p => {
      p.vy += gravity * DPR;
      p.vx *= (1 - decay);
      p.vy *= (1 - decay);
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.life = Math.max(0, 1 - t / duration);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.pow(p.life, 0.9);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    const alive = ps.some(p => p.life > 0 && p.y < canvas.height + 40 * DPR);
    if (alive) {
      _raf = requestAnimationFrame(step);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      _raf = null;
    }
  };

  _raf = requestAnimationFrame(step);

  if (!_resizeBound) {
    _resizeBound = true;
    window.addEventListener('resize', resize);
  }
}

// A tiny React wrapper (no JSX) so you can import it from App.jsx.
// It guards against server/SSR and cleans up RAF safely.
import React, { useEffect, useRef } from "react";

export default function Confetti({ active, onDone }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!active || !ref.current) return;
    fireConfetti(ref.current);
    const t = setTimeout(() => { onDone?.(); }, 1700);
    return () => {
      clearTimeout(t);
      if (_raf) cancelAnimationFrame(_raf);
      _raf = null;
    };
  }, [active, onDone]);

  // Full-screen, clicks pass through.
  return React.createElement('canvas', {
    ref,
    style: {
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 9999
    },
    width: 1,
    height: 1
  });
}
