caimport { motion } from 'framer-motion';
import { Shield, FileText, AlertTriangle, Copyright, ArrowLeft, CheckCircle } from 'lucide-react';
import ParticleCanvas from '../components/ParticleCanvas';
import { Link } from 'react-router-dom';

export default function TermsPage() {
    const sections = [
        {
            icon: CheckCircle,
            title: '1. Uso Responsável',
            content: 'O 1Fan é uma plataforma dedicada a compartilhar experiências musicais autênticas. Ao utilizar nossa plataforma, você concorda em não publicar conteúdo ofensivo, ilegal, discriminatório ou que viole direitos de terceiros. Mantenha a comunidade segura e positiva para todos.'
        },
        {
            icon: AlertTriangle,
            title: '2. Moderação de Conteúdo',
            content: 'Não toleramos discurso de ódio, assédio, nudez, conteúdo violento ou bullying. Reservamo-nos o direito de remover qualquer conteúdo que viole estas diretrizes e suspender contas envolvidas em tais atividades para proteger nossa comunidade.'
        },
        {
            icon: Copyright,
            title: '3. Propriedade Intelectual',
            content: 'Você mantém os direitos autorais sobre o conteúdo original que publica no 1Fan. No entanto, ao postar, você nos concede uma licença não exclusiva para exibir, reproduzir e distribuir seu conteúdo dentro da plataforma.'
        },
        {
            icon: Shield,
            title: '4. Suspensão de Conta',
            content: 'Podemos suspender ou encerrar sua conta permanentemente se você violar estes Termos de Uso repetidamente ou cometer infrações graves. A segurança dos nossos usuários é nossa prioridade absoluta.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-purple-950 to-zinc-950 text-white overflow-hidden">
            <ParticleCanvas />

            {/* Navvegacaon */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
                <div className="container mx-auto px-6 py-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Voltar</span>
                    </Link>
                </div>
            </nav>

            {/* cabecalho */}
            <section className="relative pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-6">
                            <FileText className="w-10 h-10" />
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Termos de Uso
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-4">
                            Regras da nossa comunidade
                        </p>

                        <p className="text-sm text-gray-400">
                            Última atualização: {new Date().toLocaleDateString('pt-BR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* introducao */}
            <section className="py-8 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Bem-vindo ao <strong className="text-white">1Fan</strong>! Estes termos regem o uso do nosso aplicativo e serviços.
                            Ao criar uma conta ou usar o 1Fan, você concorda em cumprir estas regras para garantir uma experiência segura e divertida para todos os fãs de música.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Termos */}
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-4xl space-y-6">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <section.icon className="w-6 h-6" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">{section.content}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* rodapé */}
            <footer className="py-12 px-6 border-t border-white/10 backdrop-blur-sm mt-12">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 1Fan®. Todos os direitos reservados. Desenvolvido por Gand
                    </p>
                </div>
            </footer>
        </div>
    );
}
