import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null, radius: 100 }; // Softer radius

        // Set canvas size to cover the entire scrollable document
        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;

            // Calculate maximum height to cover full scrollable area
            const docHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight,
                window.innerHeight
            );

            canvas.height = docHeight;
            init();
        };

        // Particle class
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.density = (Math.random() * 35) + 2; // Increased density (+10% more)
                this.size = Math.random() * 3.3 + 1.4; // Slightly smaller particles (-5%)
                // Stronger colors
                const colors = [
                    `rgba(147, 51, 234, ${Math.random() * 0.5 + 0.3})`, // Purple (stronger opacity)
                    `rgba(219, 39, 119, ${Math.random() * 0.5 + 0.3})`, // Pink
                    `rgba(168, 85, 247, ${Math.random() * 0.5 + 0.3})`, // Light purple
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Calculate distance from mouse (relative to viewport)
                // We need to account for scroll position if we want mouse interaction to be accurate on a large canvas
                // But for simplicity and performance on a background effect, we can use client coordinates 
                // mapped to the canvas coordinates (which are absolute).

                // Mouse event gives clientX/Y (viewport relative). 
                // Canvas is absolute 0,0 relative to document.
                // So mouse position on canvas = clientY + window.scrollY

                let mouseX = mouse.x;
                let mouseY = mouse.y !== null ? mouse.y + window.scrollY : null;

                if (mouseX !== null && mouseY !== null) {
                    let dx = mouseX - this.x;
                    let dy = mouseY - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        let forceDirectionX = dx / distance;
                        let forceDirectionY = dy / distance;
                        let maxDistance = mouse.radius;
                        let force = (maxDistance - distance) / maxDistance;
                        let directionX = forceDirectionX * force * this.density;
                        let directionY = forceDirectionY * force * this.density;

                        this.x -= directionX;
                        this.y -= directionY;
                    } else {
                        // Return to original
                        if (this.x !== this.baseX) {
                            let dx = this.x - this.baseX;
                            this.x -= dx / 10;
                        }
                        if (this.y !== this.baseY) {
                            let dy = this.y - this.baseY;
                            this.y -= dy / 10;
                        }
                    }
                } else {
                    // Return to original if no mouse
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 10;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 10;
                    }
                }

                this.draw();
            }
        }

        // Initialize particles
        const init = () => {
            particles = [];
            if (!canvas) return;

            const width = canvas.width;
            const height = canvas.height;

            // Limit max particles based on area density, but cap it to avoid performance issues on very long pages
            // Density factor 5650 (more particles +15%)
            const numberOfParticles = Math.min(Math.floor((width * height) / 5650), 210);

            for (let i = 0; i < numberOfParticles; i++) {
                let x = Math.random() * width;
                let y = Math.random() * height;
                particles.push(new Particle(x, y));
            }
        };

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) { // Increased connection distance
                        ctx.strokeStyle = `rgba(147, 51, 234, ${0.3 * (1 - distance / 120)})`; // Stronger lines
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(particle => particle.update());
            animationFrameId = requestAnimationFrame(animate);
        };

        // Event handlers
        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        const handleTouchMove = (event) => {
            if (event.touches.length > 0) {
                mouse.x = event.touches[0].clientX;
                mouse.y = event.touches[0].clientY;
            }
        };

        const handleTouchEnd = () => {
            mouse.x = null;
            mouse.y = null;
        };

        // Add listeners
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        // Initial setup
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{
                zIndex: 0,
                background: 'transparent'
            }}
        />
    );
}
