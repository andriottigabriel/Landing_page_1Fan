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
        let mouse = { x: null, y: null, radius: 100 }; // Softer

        // canvas
        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;

            // calculo max scroll
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
                this.density = (Math.random() * 35) + 2; // densidade(+10% )
                this.size = Math.random() * 3.3 + 1.4; // particilas (-5%)
                // cores
                const colors = [
                    `rgba(147, 51, 234, ${Math.random() * 0.5 + 0.3})`, // roxo (opacidade)
                    `rgba(219, 39, 119, ${Math.random() * 0.5 + 0.3})`, // rosa
                    `rgba(168, 85, 247, ${Math.random() * 0.5 + 0.3})`, // roxo leve
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
 // Calcular a distância do mouse (relativa ao viewport);;;;
// Precisamos levar em conta a posição de rolagem se quisermos que a interação com o mouse seja precisa em um canvas grande
// Mas, por simplicidade e desempenho em um efeito de fundo, podemos usar coordenadas do cliente
// mapeadas para as coordenadas do canvas (que são absoluta

// a rolagem do mouse fornece clientX/Y (relativos à viewport)
// O canvas está em 0,0 absoluto em relação ao doc
//  a posição do mouse no canvas = clientY + window.scrollY


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
                        // retorno original
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
                    // retorno posição mouse
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

        // iniciio particulas
        const init = () => {
            particles = [];
            if (!canvas) return;

            const width = canvas.width;
            const height = canvas.height;

            // limit max particulas
            // densidade
            const numberOfParticles = Math.min(Math.floor((width * height) / 5650), 210);

            for (let i = 0; i < numberOfParticles; i++) {
                let x = Math.random() * width;
                let y = Math.random() * height;
                particles.push(new Particle(x, y));
            }
        };

        // animação loop
        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // conxoes
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) { // distancia
                        ctx.strokeStyle = `rgba(147, 51, 234, ${0.3 * (1 - distance / 120)})`; // linhas
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

        // Eventos
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

        // Add listas
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        // setup inicial
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
