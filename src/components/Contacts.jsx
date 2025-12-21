

import { useState, useEffect } from 'react';

// Icon components
function Phone({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81-.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function Mail({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-10 5L2 7" />
        </svg>
    );
}

function Location({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}



export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const contactInfo = [
        {
            icon: Phone,
            title: "Téléphone",
            content: ["(+237) 698 18 76 65", "(+237) 650 94 02 72"],
            color: "from-green-400 to-emerald-400"
        },
        {
            icon: Mail,
            title: "Email",
            content: ["joestarnyekotch@gmail.com"],
            color: "from-cyan-400 to-blue-400"
        },
        {
            icon: Location,
            title: "Localisation",
            content: ["Yaounde, Cameroun", "Disponible pour télétravail"],
            color: "from-purple-400 to-pink-400"
        }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phoneNumber, subject, message } = formData;
        const mailtoLink = `mailto:votre-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`De: ${name}\nEmail: ${email}\nTéléphone: ${phoneNumber}\n\n${message}`)}`;
        window.location.href = mailtoLink;
        setFormData({ name: '', email: '', phoneNumber: '', subject: '', message: '' });
        alert('Merci ! Votre message a été envoyé.');
    };

    return (
        <section id="contact" className="min-h-screen py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
            {/* Background animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Animated Title */}
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-5xl md:text-7xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                        Contact
                    </span>
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    N'hésitez pas à me contacter pour discuter de vos projets, opportunités professionnelles ou collaborations.
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
                {/* Contact Information - Left */}
                <div className={`flex-1 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className={`transform transition-all duration-700 ${
                                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 100 + 400}ms` }}
                            >
                                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/20 group">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <info.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                                                {info.title}
                                            </h3>
                                            <div className="space-y-1">
                                                {info.content.map((line, lineIndex) => (
                                                    <p key={lineIndex} className="text-gray-300">
                                                        {line}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form - Right */}
                <div className={`flex-1 max-w-xl transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/20">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
                            Envoyez un message
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                                        Nom complet
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="name"
                                        required
                                        className="block w-full rounded-lg bg-white/5 border border-gray-600/30 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                                        placeholder="Votre nom"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-lg bg-white/5 border border-gray-600/30 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Téléphone
                                </label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                    className="block w-full rounded-lg bg-white/5 border border-gray-600/30 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                                    placeholder="(+237) XXX XXX XXX"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Sujet
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required
                                    className="block w-full rounded-lg bg-white/5 border border-gray-600/30 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                                    placeholder="Objet de votre message"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                    className="block w-full rounded-lg bg-white/5 border border-gray-600/30 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                                    placeholder="Votre message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25"
                            >
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className={`text-center mt-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="inline-flex items-center bg-gradient-to-r from-purple-400/20 to-cyan-400/20 backdrop-blur-lg border border-purple-400/30 rounded-full px-8 py-4">
                    <div className="flex gap-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">24/7</div>
                            <div className="text-sm text-gray-400">Disponible</div>
                        </div>
                        <div className="w-px bg-gray-600"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">Rapide</div>
                            <div className="text-sm text-gray-400">Réponse</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
