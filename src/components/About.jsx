import avatar from "../assets/avatar.png";
import { useState, useEffect } from 'react';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="a-propos" className="min-h-screen py-20 px-6 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Animated Title */}
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-5xl md:text-7xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                        À Propos de Moi
                    </span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
                        {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start relative z-10">
                
                {/* Profile Section */}
                <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
                            Profil
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Récemment diplômé de l'ENSPD, je suis un développeur full-stack spécialisé dans la création
                            d'applications web robustes et scalables. Avec une expérience pratique en environnement hôtelier
                            et une expertise en technologies modernes, je suis capable de concevoir, développer et déployer
                            des solutions complètes du frontend au backend.
                        </p>
                    </div>
                </div>
                                {/* Photo Section */}
                <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="relative w-64 h-64 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full animate-spin opacity-20"></div>
                            <img 
                                src={avatar} 
                                alt="Vincent de Paul Nyekotch" 
                                className="relative w-full h-full rounded-full object-cover border-4 border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                                Available
                            </div>
                        </div>
                    </div>
                </div>

                {/* Goals Section */}
                <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/20">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                            Objectif
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Mon objectif : Rejoindre une équipe dynamique en télétravail au Canada ou à l'international,
                            où je pourrai contribuer à des projets d'envergure tout en continuant à approfondir mes
                            compétences en architecture logicielle et design système.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}