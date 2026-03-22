"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let animationFrame = 0;
    let points: Point[] = [];

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const gap = rect.width < 768 ? 56 : 64;
      const cols = Math.ceil(rect.width / gap) + 1;
      const rows = Math.ceil(rect.height / gap) + 1;

      points = [];

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          points.push({
            x: col * gap + (row % 2 === 0 ? 10 : 28),
            y: row * gap + (col % 2 === 0 ? 10 : 24),
          });
        }
      }
    };

    const draw = () => {
      const rect = parent.getBoundingClientRect();
      const { x: pointerX, y: pointerY, active } = pointerRef.current;

      context.clearRect(0, 0, rect.width, rect.height);

      for (const point of points) {
        const dx = pointerX - point.x;
        const dy = pointerY - point.y;
        const distance = Math.hypot(dx, dy);
        const glowStrength = active ? Math.max(0, 1 - distance / 180) : 0;

        context.beginPath();
        context.fillStyle = glowStrength > 0.02 ? `rgba(227, 50, 146, ${0.18 + glowStrength * 0.5})` : "rgba(255, 255, 255, 0.14)";
        context.rect(point.x - 1.5, point.y - 1.5, 3, 3);
        context.fill();
      }

      if (active) {
        for (let i = 0; i < points.length; i += 1) {
          const pointA = points[i];
          const distanceToPointer = Math.hypot(pointerX - pointA.x, pointerY - pointA.y);

          if (distanceToPointer > 180) continue;

          for (let j = i + 1; j < points.length; j += 1) {
            const pointB = points[j];
            const pointDistance = Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y);

            if (pointDistance > 86) continue;

            const pointerDistanceB = Math.hypot(pointerX - pointB.x, pointerY - pointB.y);
            const intensity = Math.max(0, 1 - Math.max(distanceToPointer, pointerDistanceB) / 180);

            if (intensity < 0.08) continue;

            context.beginPath();
            context.strokeStyle = `rgba(227, 50, 146, ${intensity * 0.35})`;
            context.lineWidth = 1;
            context.moveTo(pointA.x, pointA.y);
            context.lineTo(pointB.x, pointB.y);
            context.stroke();
          }
        }

        const gradient = context.createRadialGradient(pointerX, pointerY, 0, pointerX, pointerY, 180);
        gradient.addColorStop(0, "rgba(227, 50, 146, 0.18)");
        gradient.addColorStop(1, "rgba(227, 50, 146, 0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(pointerX, pointerY, 180, 0, Math.PI * 2);
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!inside) {
        pointerRef.current.active = false;
        return;
      }

      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    resize();
    draw();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-90" aria-hidden="true" />;
}
