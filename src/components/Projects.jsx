

import { useState, useEffect } from 'react';

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            emoji: '🏨',
            title: 'school Management System',
            description: 'Système complet de gestion hôtelière d\'une ecole primaire',
            tech: ['React', 'laravel', 'MySQL', ]
        },
        {
            emoji: '💰',
            title: 'Conception et realisation d\'une plateforme de gestion des dechets',
            description: 'une application web et mobile dédiée à la gestion et à la signalisation des déchets urbains au Cameroun, avec un focus particulier sur la ville de Douala.',
            tech: ['React', 'Tailwind', 'laravel', 'MySQL', 'postman', 'git', 'React Native']
        },
        {
            emoji: '👥',
            title: 'CRM Client Management',
            description: 'Plateforme CRM intuitive pour gérer clients et interactions commerciales.',
            tech: ['React', 'Laravel', 'MySQL']
        },

        {
            emoji: '📊',
            title: 'Analytics & Reporting Tool',
            description: 'Outil d\'analytics avec rapports personnalisés et exports.',
            tech: ['React', 'D3.js', 'PostgreSQL']
        },
        {
            emoji: '🔐',
            title: 'Authentication System',
            description: 'Système d\'authentification sécurisé avec JWT et 2FA.',
            tech: ['Node.js', 'JWT', 'PostgreSQL']
        }
    ];

    const categories = [
        { id: 'all', label: 'Tous', color: 'from-cyan-400 to-purple-400 pg-white' },
        { id: 'web', label: 'Web', color: 'from-blue-400 to-indigo-400' },
        { id: 'mobile', label: 'Mobile', color: 'from-green-400 to-emerald-400' },
        { id: 'fullstack', label: 'Full-Stack', color: 'from-purple-400 to-pink-400' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => {
            if (activeFilter === 'web') return !project.tech.includes('React Native');
            if (activeFilter === 'mobile') return project.tech.includes('React Native');
            if (activeFilter === 'fullstack') return project.tech.includes('Node.js');
            return true;
        });

    return (
        <section id="projets" className="min-h-screen py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
            {/* Background animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Animated Title */}
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-5xl md:text-7xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                        Projets
                    </span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            {/* Filter Buttons */}
            <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/30 rounded-full p-2 flex gap-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === category.id
                                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/30 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/20 group h-full flex flex-col">
                            {/* Project Header */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center overflow-hidden">
                                <div className="text-6xl transform transition-transform duration-300 group-hover:scale-110">
                                    {project.emoji}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 text-cyan-400 rounded-full text-xs font-semibold border border-cyan-400/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <a
                                        href="#"
                                        className="flex-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 hover:from-cyan-400/40 hover:to-blue-400/40 text-cyan-400 py-2 rounded-lg transition-all duration-300 font-semibold text-center border border-cyan-400/30 hover:border-cyan-400/50"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 hover:from-purple-400/40 hover:to-pink-400/40 text-purple-400 py-2 rounded-lg transition-all duration-300 font-semibold text-center border border-purple-400/30 hover:border-purple-400/50"
                                    >
                                        Démo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Stats */}
            <div className={`text-center mt-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="inline-flex items-center bg-gradient-to-r from-purple-400/20 to-cyan-400/20 backdrop-blur-lg border border-purple-400/30 rounded-full px-8 py-4">
                    <div className="flex gap-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">{filteredProjects.length}</div>
                            <div className="text-sm text-gray-400">Projets</div>
                        </div>
                        <div className="w-px bg-gray-600"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">8+</div>
                            <div className="text-sm text-gray-400">Technologies</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
