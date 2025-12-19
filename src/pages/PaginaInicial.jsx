import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Music, Users, Heart, Star, Shield, ArrowRight, Play } from 'lucide-react';
import ParticleCanvas from '../components/ParticleCanvas';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const [currentScreen, setCurrentScreen] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentScreen((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const features = [
        {
            icon: Music,
            title: 'Registre Cada Show',
            description: 'Faça check-in nos shows dos seus artistas favoritos. Mostre que você estava lá quando eles subiram ao palco.',
            gradient: 'from-purple-600 to-blue-600'
        },
        {
            icon: Heart,
            title: 'Conecte-se com Artistas',
            description: 'Siga seus artistas, acompanhe lançamentos e seja parte da jornada musical de quem você admira.',
            gradient: 'from-pink-600 to-purple-600'
        },
        {
            icon: Users,
            title: 'Comunidade de Fãs',
            description: 'Entre em fã-clubes oficiais, discuta com outros fãs e compartilhe sua paixão pelos mesmos artistas.',
            gradient: 'from-purple-600 to-pink-600'
        },
        {
            icon: Star,
            title: 'Conquistas Especiais',
            description: 'Ganhe badges exclusivos por seguir artistas, ir a shows e ser um verdadeiro fã dedicado.',
            gradient: 'from-blue-600 to-cyan-600'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-purple-950 to-zinc-950 text-white overflow-x-hidden">
            <ParticleCanvas />

            {/* navegação */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 p-0.5">
                            <img src="logo.png" alt="1Fan" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            1Fan
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-6"
                    >
                        <Link
                            to="/privacy"
                            className="hidden sm:block text-sm text-gray-300 hover:text-white transition-colors"
                        >
                            Privacidade
                        </Link>
                        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 text-sm font-medium">
                            Baixar App
                        </button>
                    </motion.div>
                </div>
            </nav>

<<<<<<< HEAD:src/pages/PaginaInicial.jsx
            {/* seção principal (hero) */}
=======
            {/* seção 01 */}
>>>>>>> ffdb7c7b488d171d8c029a6fda48405f4904b8de:src/pages/LandingPage.jsx
            <section className="relative pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm"
                        >
                            <span className="text-xs md:text-sm font-medium text-purple-300">🎵 A ponte que conecta fãs aos seus ídolos musicais</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                                Conecte-se
                            </span>
                            <br />
                            <span className="text-white">com seus Artistas</span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            A ponte entre você e seus <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">artistas favoritos</span>.
                            Registre shows, compartilhe momentos e conecte-se com quem vive a mesma paixão musical.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <button className="w-full sm:w-auto hover:scale-105 active:scale-95 group px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 text-lg font-bold flex items-center justify-center gap-3 shadow-lg shadow-purple-500/50">
                                <Download className="w-6 h-6" />
                                Baixar Agora
                            </button>
                        </motion.div>
                    </motion.div>

<<<<<<< HEAD:src/pages/PaginaInicial.jsx
                    {/* seção do celular */}
=======
                    {/* mochup celular */}
>>>>>>> ffdb7c7b488d171d8c029a6fda48405f4904b8de:src/pages/LandingPage.jsx
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-20 relative flex justify-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent blur-3xl max-w-lg mx-auto" />

<<<<<<< HEAD:src/pages/PaginaInicial.jsx
                        {/* moldura do celular em css */}
                        <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-zinc-900 shadow-2xl shadow-purple-500/30 overflow-hidden">

                            {/* conteúdo da tela - slideshow */}
=======
                        {/* css frame celular */}
                        <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-zinc-900 shadow-2xl shadow-purple-500/30 overflow-hidden">

                            {/* Slide */}
>>>>>>> ffdb7c7b488d171d8c029a6fda48405f4904b8de:src/pages/LandingPage.jsx
                            <div className="relative w-full h-full bg-zinc-950 overflow-hidden">
                                {[1, 2, 3].map((num, index) => (
                                    <motion.img
                                        key={num}
                                        src={`screenshots/screen${num}.jpg`}
                                        alt={`App Screen ${num}`}
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: currentScreen === index ? 1 : 0,
                                            // escala normal
                                            scale: currentScreen === index ? 1.0 : 1.05
                                        }}
                                        transition={{ duration: 0.8 }}
                                        // Crop top/bottom bars by making height > 100% and shifting up
                                        className="absolute left-0 w-full h-[112%] -top-[24px] object-cover"
                                        style={{ objectPosition: 'center top' }}
                                    />
                                ))}

<<<<<<< HEAD:src/pages/PaginaInicial.jsx
                                {/* gradiente pra dar um tchan */}
=======
                                {/* gradientee */}
>>>>>>> ffdb7c7b488d171d8c029a6fda48405f4904b8de:src/pages/LandingPage.jsx
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
                            </div>
                        </div>

<<<<<<< HEAD:src/pages/PaginaInicial.jsx
                        {/* elementos decorativos atrás do celular */}
=======
                        {/* elementos celular */}
>>>>>>> ffdb7c7b488d171d8c029a6fda48405f4904b8de:src/pages/LandingPage.jsx
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                        />
                    </motion.div>
                </div>
            </section>

<<<<<<< HEAD:src/pages/PaginaInicial.jsx
            {/* seção de conexão - nova */}
=======
            {/* conexões */}
>>>>>>> ffdb7c7b488d171d8c029a6fda48405f4904b8de:src/pages/LandingPage.jsx
            <section className="py-20 px-6 relative">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden border border-purple-500/30"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10" />

                        <div className="relative p-8 md:p-16">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        Conecte-se Diretamente
                                    </span>
                                    <br />
                                    <span className="text-white">com seus Artistas</span>
                                </h2>
                                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                                    O 1Fan é a ponte entre você e os artistas que transformam sua vida através da música.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 mx-auto mb-4 flex items-center justify-center">
                                        <Heart className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Acompanhe seus Ídolos</h3>
                                    <p className="text-gray-400">
                                        Siga seus artistas favoritos, receba atualizações de shows e lançamentos, e esteja sempre conectado com quem inspira você.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-600 to-pink-400 mx-auto mb-4 flex items-center justify-center">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Faça Parte da Comunidade</h3>
                                    <p className="text-gray-400">
                                        Entre em fã-clubes oficiais dos seus artistas e conecte-se com outros fãs que vivem a mesma paixão musical.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mx-auto mb-4 flex items-center justify-center">
                                        <Star className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Registre sua Jornada</h3>
                                    <p className="text-gray-400">
                                        Faça check-in em cada show dos seus artistas favoritos e crie um histórico das suas experiências musicais.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

<<<<<<< HEAD:src/pages/PaginaInicial.jsx
            {/* seção de recursos */}
=======
            {/* seção 02 */}
>>>>>>> ffdb7c7b488d171d8c029a6fda48405f4904b8de:src/pages/LandingPage.jsx
            <section className="py-20 px-6 relative">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Recursos Incríveis
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300">Tudo que você precisa para viver a música intensamente</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onHoverStart={() => setHoveredFeature(index)}
                                onHoverEnd={() => setHoveredFeature(null)}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                                    style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />

                                <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 min-h-[200px] flex flex-col">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* seção de download */}
            <section className="py-20 px-6 relative">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden border border-white/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />

                        <div className="relative p-12 md:p-16 text-center backdrop-blur-sm">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                Pronto para começar?
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 mb-8">
                                Baixe o 1Fan agora e conecte-se com a comunidade musical
                            </p>

<<<<<<< HEAD:src/pages/PaginaInicial.jsx
                            {/* espaço pro qr code */}
=======
                            {/* QR Code imagem */}
>>>>>>> ffdb7c7b488d171d8c029a6fda48405f4904b8de:src/pages/LandingPage.jsx
                            <div className="inline-block p-6 rounded-2xl bg-white mb-8">
                                <div className="w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl flex items-center justify-center">
                                    <div className="text-center">
                                        <Download className="w-16 h-16 mx-auto mb-2 text-purple-600" />
                                        <p className="text-xs text-purple-600 font-medium">Escaneie para baixar</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 mb-6">
                                Disponível na Google Play Store
                            </p>

                            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 text-lg font-medium shadow-lg shadow-purple-500/50">
                                Baixar para Android
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

<<<<<<< HEAD:src/pages/PaginaInicial.jsx
            {/* seção de contato */}
=======
            {/* contato */}
>>>>>>> ffdb7c7b488d171d8c029a6fda48405f4904b8de:src/pages/LandingPage.jsx
            <section className="py-20 px-6 relative border-t border-white/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Precisa de ajuda?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Tem alguma dúvida, sugestão ou precisa de suporte? Nossa equipe está pronta para te ouvir.
                    </p>
                    <a
                        href="mailto:suporte@1fan.com"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 text-purple-300 hover:text-purple-200"
                    >
                        <Shield className="w-5 h-5" />
                        Fale Conosco (suporte@1fan.com)
                    </a>
                </div>
            </section>

<<<<<<< HEAD:src/pages/PaginaInicial.jsx
            {/* rodapé */}
=======
            {/* rodape */}
>>>>>>> ffdb7c7b488d171d8c029a6fda48405f4904b8de:src/pages/LandingPage.jsx
            <footer className="py-12 px-6 border-t border-white/10 backdrop-blur-sm">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 p-0.5">
                                <img src="logo.png" alt="1Fan" className="w-full h-full object-cover rounded-full" />
                            </div>
                            <span className="text-xl font-bold">1Fan</span>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center">
                            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                                Política de Privacidade
                            </Link>
                            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                                Termos de Uso
                            </Link>
                            <a href="mailto:suporte@1fan.com" className="text-gray-300 hover:text-white transition-colors">
                                Contato
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-gray-400 text-sm">
                        <p>© 2025 1Fan®. Todos os direitos reservados. Desenvolvido por Gand</p>
                        <p className="mt-2">Conectando fãs e artistas ao redor do mundo 🎵</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
