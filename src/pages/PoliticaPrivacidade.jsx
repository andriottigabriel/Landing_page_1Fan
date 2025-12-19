import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, FileText, ArrowLeft } from 'lucide-react';
import ParticleCanvas from '../components/ParticleCanvas';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
    const sections = [
        {
            icon: Database,
            title: 'Dados Coletados',
            content: 'Coletamos apenas informações essenciais: nome, email, localização (cidade/estado) e suas interações no app como check-ins e curtidas. Suas fotos de perfil e check-ins são armazenadas com segurança.'
        },
        {
            icon: Lock,
            title: 'Segurança',
            content: 'Utilizamos criptografia de ponta a ponta e autenticação JWT. Suas senhas são protegidas com hash bcrypt. Todos os dados são transmitidos via HTTPS.'
        },
        {
            icon: Eye,
            title: 'Privacidade',
            content: 'Você controla o que compartilha. Posts podem ser públicos ou privados. Nunca vendemos seus dados para terceiros. Sua localização precisa nunca é compartilhada.'
        },
        {
            icon: UserCheck,
            title: 'Seus Direitos',
            content: 'Você pode acessar, editar ou excluir seus dados a qualquer momento. Solicite a remoção completa da sua conta diretamente nas configurações do app.'
        },
        {
            icon: Shield,
            title: 'Proteção de Menores',
            content: 'O 1Fan é destinado a maiores de 13 anos. Tomamos medidas extras para proteger a privacidade de usuários menores de idade conforme legislação vigente.'
        },
        {
            icon: FileText,
            title: 'Uso de Dados',
            content: 'Usamos seus dados para melhorar sua experiência, recomendar artistas similares e conectá-lo com fãs. Nunca usamos para spam ou publicidade invasiva.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-purple-950 to-zinc-950 text-white overflow-hidden">
            <ParticleCanvas />

            {/* navegacao */}
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

            {/* cabeçalho */}
            <section className="relative pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-6">
                            <Shield className="w-10 h-10" />
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Política de Privacidade
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-4">
                            Sua privacidade é nossa prioridade
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
                            O <strong className="text-white">1Fan</strong> é uma plataforma de conexão entre fãs e artistas musicais.
                            Levamos sua privacidade a sério e nos comprometemos a proteger seus dados pessoais.
                            Esta política descreve como coletamos, usamos e protegemos suas informações.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* seção privacidade */}
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

            {/* LGPD  */}
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <Shield className="w-7 h-7 text-purple-400" />
                            Conformidade com LGPD
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            O 1Fan está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                            Você tem total controle sobre seus dados e pode exercer seus direitos a qualquer momento.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <h4 className="font-semibold mb-2">📝 Direito de Acesso</h4>
                                <p className="text-sm text-gray-400">Consulte seus dados a qualquer momento</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <h4 className="font-semibold mb-2">✏️ Direito de Correção</h4>
                                <p className="text-sm text-gray-400">Atualize informações incorretas</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <h4 className="font-semibold mb-2">🗑️ Direito de Exclusão</h4>
                                <p className="text-sm text-gray-400">Delete sua conta permanentemente</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <h4 className="font-semibold mb-2">📤 Direito de Portabilidade</h4>
                                <p className="text-sm text-gray-400">Exporte seus dados em formato legível</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contato */}
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-bold mb-4">Dúvidas sobre Privacidade?</h3>
                        <p className="text-gray-300 mb-6">
                            Entre em contato conosco para qualquer questão relacionada à sua privacidade e dados pessoais.
                        </p>
                        <a
                            href="mailto:privacy@1fan.com"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 font-medium"
                        >
                            Contatar Equipe de Privacidade
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* rodapé */}
            <footer className="py-12 px-6 border-t border-white/10 backdrop-blur-sm mt-12">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 1Fan®. Todos os direitos reservados. Desenvolvido por Gand
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        Conectando fãs e artistas com responsabilidade e transparência
                    </p>
                </div>
            </footer>
        </div>
    );
}
