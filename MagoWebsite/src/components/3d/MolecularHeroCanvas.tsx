import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
}

export const MolecularHeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Chemical particle types (Emerald, Cyan, White nodes)
    const particleColors = [
      { fill: '#29C702', glow: 'rgba(41, 199, 2, 0.6)' },
      { fill: '#52e32f', glow: 'rgba(82, 227, 47, 0.5)' },
      { fill: '#10B981', glow: 'rgba(16, 185, 129, 0.4)' },
      { fill: '#38BDF8', glow: 'rgba(56, 189, 248, 0.4)' },
      { fill: '#E2E8F0', glow: 'rgba(226, 232, 240, 0.3)' }
    ];

    const particleCount = Math.min(65, Math.floor(width / 22));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const colorScheme = particleColors[Math.floor(Math.random() * particleColors.length)];
      const baseR = Math.random() * 2.8 + 1.8;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 300 + 50,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        vz: (Math.random() - 0.5) * 0.25,
        radius: baseR,
        baseRadius: baseR,
        color: colorScheme.fill,
        glowColor: colorScheme.glow,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Subtle ambient glowing focal radial backdrop
      const radialGradient = ctx.createRadialGradient(
        mouseX,
        mouseY * 0.85,
        50,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );
      radialGradient.addColorStop(0, 'rgba(41, 199, 2, 0.09)');
      radialGradient.addColorStop(0.35, 'rgba(14, 165, 233, 0.04)');
      radialGradient.addColorStop(1, 'rgba(11, 15, 23, 0)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw chemical bonds between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Motion & mouse parallax
        p1.x += p1.vx;
        p1.y += p1.vy;
        p1.z += p1.vz;

        // Bounce boundaries
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;
        if (p1.z < 50 || p1.z > 350) p1.vz *= -1;

        // Pulse size
        p1.radius = p1.baseRadius + Math.sin(time + p1.pulsePhase) * 0.7;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 135;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.32;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(41, 199, 2, ${alpha})`;
            ctx.lineWidth = (1 - dist / maxDist) * 1.2;
            ctx.stroke();

            // Occasionally draw small molecular electron on the bond line
            if (dist < 85 && (i + j) % 7 === 0) {
              const pulsePos = (Math.sin(time * 2 + i) + 1) / 2;
              const ex = p1.x + (p2.x - p1.x) * pulsePos;
              const ey = p1.y + (p2.y - p1.y) * pulsePos;
              ctx.beginPath();
              ctx.arc(ex, ey, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = '#52e32f';
              ctx.fill();
            }
          }
        }

        // Draw chemical molecule node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, Math.max(0.5, p1.radius), 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowColor = p1.glowColor;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
