import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    const numberOfParticles = 150;

    // Resize Canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        this.opacity = Math.random();
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Keep particles inside the screen
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

        // Twinkling effect
        this.opacity += Math.random() * 0.05 - 0.025;
        if (this.opacity > 1) this.opacity = 1;
        if (this.opacity < 0.3) this.opacity = 0.3;
      }
      draw() {
        ctx.fillStyle = `rgba(173, 216, 230, ${this.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(0, 174, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Mouse Interaction
    const mouse = { x: null, y: null };
    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    // Animation loop
    const animateParticles = () => {
      ctx.fillStyle = "rgba(0, 0, 20, 0.9)"; // Deep space blue-black
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Add Mouse Interaction Effect
      for (let i = 0; i < particlesArray.length; i++) {
        let dx = mouse.x - particlesArray[i].x;
        let dy = mouse.y - particlesArray[i].y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          particlesArray[i].x += dx * 0.02;
          particlesArray[i].y += dy * 0.02;
        }
      }

      requestAnimationFrame(animateParticles);
    };

    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", mouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: "radial-gradient(circle at center, #00274d, #000)" }}
    />
  );
};

export default ParticleBackground;
