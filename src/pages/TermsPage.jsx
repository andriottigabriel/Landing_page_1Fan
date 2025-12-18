import { motion } from 'framer-motion';
import { FileText, Shield, UserCheck, Scale, AlertCircle, ArrowLeft } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import { Link } from 'react-router-dom';

export default function TermsPage() {
    const sections = [
        {
            icon: Scale,
            title: 'Termos de Uso',
            content: 'Ao acessar o 1Fan, você concorda com estes termos. O uso da plataforma é gratuito, mas requer cadastro e conformidade com nossas regras de comunidade.'
        },
        {
            icon: UserCheck,
            title: 'Elegibilidade',
            content: 'Você deve ter pelo menos 13 anos para usar o 1Fan. Menores de 18 anos devem ter permissão dos pais ou responsáveis.'
        },
        {
            icon: AlertCircle,
            title: 'Conduta do Usuário',
            content: 'É proibido postar conteúdo ofensivo, spam, ou violar direitos autorais. Respeite os outros fãs e artistas. O descumprimento pode levar ao banimento.'
        },
        {
            icon: Shield,
            title: 'Propriedade Intelectual',
            content: 'Todo o conteúdo do app, logos e design pertencem ao 1Fan. O conteúdo gerado pelo usuário continua sendo do usuário, mas nos concede licença de exibição.'
        },
        {
            icon: FileText,
            title: 'Limitação de Responsabilidade',
            content: 'O 1Fan não se responsabiliza por encontros presenciais entre usuários ou por mudanças em agendas de shows dos artistas.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-purple-950 to-zinc-950 text-white overflow-hidden">
            <ParticleCanvas />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
                <div className="container mx-auto px-6 py-4 flex flex-col items-center sm:flex-row sm:justify-between">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4 sm:mb-0 self-center"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Voltar</span>
                    </Link>
                </div>
            </nav>

            {/* Header */}
            <section className="relative pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-6">
                            <Scale className="w-10 h-10" />
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Termos de Uso
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-4">
                            Regras e diretrizes da plataforma 1Fan
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

            {/* Terms Sections */}
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

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/10 backdrop-blur-sm mt-12">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 1Fan. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
