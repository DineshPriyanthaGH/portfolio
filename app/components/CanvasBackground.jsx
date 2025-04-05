// components/CanvasBackground.jsx
'use client'; // This ensures the component is rendered on the client side

import { useEffect } from 'react';

const CanvasBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');

    let particles = [];
    const maxParticles = 100;

    // Resize canvas to match window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.color = 'white';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1; // Shrinking effect

        // Draw the particle
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }

    // Create particles and animate
    function createParticles(e) {
      const xPos = e.x;
      const yPos = e.y;

      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle(xPos, yPos));
      }
    }

    // Connect particles
    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animate the particles
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connectParticles();
      requestAnimationFrame(animateParticles);
    }

    // Event listener for mouse move to generate particles
    canvas.addEventListener('mousemove', createParticles);

    animateParticles(); // Start animation

    return () => {
      canvas.removeEventListener('mousemove', createParticles);
    };
  }, []);

  return (
    <canvas
      id="animationCanvas"
      className="absolute top-0 left-0 w-full h-full z-[-1]"
    ></canvas>
  );
};

export default CanvasBackground;
