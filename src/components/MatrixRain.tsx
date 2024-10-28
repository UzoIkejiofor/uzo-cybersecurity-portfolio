import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const circuits: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      width: number;
      progress: number;
    }> = [];

    // Create initial circuits
    for (let i = 0; i < 50; i++) {
      circuits.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 50 + Math.random() * 100,
        speed: 1 + Math.random() * 2,
        width: 1 + Math.random() * 2,
        progress: 0
      });
    }

    const draw = () => {
      // Create semi-transparent fade effect
      ctx.fillStyle = 'rgba(10, 25, 47, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      circuits.forEach((circuit, index) => {
        // Draw circuit line
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 255, 65, ${1 - circuit.progress})`;
        ctx.lineWidth = circuit.width;
        
        // Create circuit path
        ctx.moveTo(circuit.x, circuit.y);
        ctx.lineTo(circuit.x + circuit.length, circuit.y);
        
        // Add connecting lines
        if (index % 3 === 0) {
          ctx.lineTo(circuit.x + circuit.length + 20, circuit.y + 20);
        }
        
        ctx.stroke();

        // Add data transfer effect
        const dataPosition = circuit.x + (circuit.length * circuit.progress);
        ctx.beginPath();
        ctx.arc(dataPosition, circuit.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#00ff41';
        ctx.fill();

        // Update progress
        circuit.progress += 0.01 * circuit.speed;

        // Reset circuit when complete
        if (circuit.progress >= 1) {
          circuit.x = Math.random() * canvas.width;
          circuit.y = Math.random() * canvas.height;
          circuit.length = 50 + Math.random() * 100;
          circuit.progress = 0;
        }
      });
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" />;
};

export default MatrixRain;