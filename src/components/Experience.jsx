import { useState, useEffect } from 'react';

export default function Experience() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('experience');

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const experiences = [
        {
            title: 'Stagiaire Développeur Web',
            company: 'Orbit Consulting Sarl',
            dates: 'Mars - Juillet 2025',
            location: 'Douala, Cameroun',
            description: 'Création et développement de sites internet interactifs.',
            responsibilities: [
                'Design des fonctionnalités, développement en front et en back',
                'Conduite des tests fonctionnels et unitaires avec identification des bugs'
            ],
            technologies: ['React', 'Node.js', 'MySQL'],
            color: 'from-cyan-400 to-blue-400'
        },
        {
            title: 'Stagiaire Développeur Web',
            company: 'Ministère des postes et télécommunications',
            dates: 'Juin - Août 2024',
            location: 'Yaoundé, Cameroun',
            description: 'Conception et développement d\'une application de messagerie interne pour les employés.',
            responsibilities: [
                'Développement frontend avec React',
                'Création d\'API REST avec Node.js et Express',
                'Gestion de la base de données MySQL'
            ],
            technologies: ['React', 'Node.js', 'Express', 'MySQL'],
            color: 'from-purple-400 to-pink-400'
        },
        {
            title: 'Stagiaire Développeur Web',
            company: 'Eneo Cameroun',
            dates: 'Juin - Août 2023',
            location: 'Douala, Cameroun',
            description: 'Conception des sites web avec React et Node.js.',
            responsibilities: [
                'Développement d\'interfaces utilisateur modernes',
                'Intégration de fonctionnalités backend',
                'Maintenance et optimisation des applications existantes'
            ],
            technologies: ['React', 'Node.js', 'Tailwind CSS'],
            color: 'from-green-400 to-emerald-400'
        }
    ];

    const formations = [
        {
            title: 'Ingénieur Logiciel',
            company: 'École Nationale Supérieure Polytechnique',
            dates: '2022 - 2025',
            location: 'Douala, Cameroun',
            description: 'Formation d\'excellence en génie logiciel et architecture système.',
            responsibilities: [
                'Spécialisation en développement full-stack',
                'Projets d\'envergure en technologies modernes',
                'Architecture logicielle et design patterns'
            ],
            technologies: ['React', 'Node.js', 'PostgreSQL', 'UML'],
            color: 'from-blue-400 to-indigo-400'
        },
        {
            title: 'Licence Technologique',
            company: 'Institut Universitaire de Technologie',
            dates: '2019 - 2022',
            location: 'Douala, Cameroun',
            description: 'Formation fondamentale en technologies de l\'information.',
            responsibilities: [
                'Algorithmique et programmation',
                'Bases de données et réseaux',
                'Développement web et mobile'
            ],
            technologies: ['Java', 'Python', 'SQL', 'HTML/CSS'],
            color: 'from-green-400 to-emerald-400'
        },
        {
            title: 'Baccalauréat C',
            company: 'Lycée Bilingue Essos',
            dates: '2015 - 2016',
            location: 'Yaoundé, Cameroun',
            description: 'Formation scientifique avec spécialisation mathématiques et physique.',
            responsibilities: [
                'Mathématiques avancées',
                'Physique-Chimie',
                'Informatique et programmation'
            ],
            technologies: ['Algorithmique', 'Python', 'Excel'],
            color: 'from-purple-400 to-pink-400'
        }
    ];

    const tabs = [
        { id: 'experience', label: 'Expérience', color: 'from-cyan-400 to-purple-400' },
        { id: 'formation', label: 'Formation', color: 'from-blue-400 to-indigo-400' }
    ];

    const currentData = activeTab === 'experience' ? experiences : formations;

    return (
        <section id="experience" className="min-h-screen py-20 px-6 max-w-7xl mx-auto relative overflow-hidden bg-white">
            {/* Background animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Animated Title */}
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-5xl md:text-7xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600">
                        Parcours
                    </span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* Tabs Navigation */}
            <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="bg-white border border-gray-200 rounded-full p-2 flex gap-2 shadow-lg">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeTab === tab.id
                                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Timeline */}
            <div className="relative z-10">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 opacity-30"></div>

                {currentData.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center mb-12 transform transition-all duration-700 ${
                            isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-10 opacity-0' : 'translate-x-10 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-white z-20">
                            <div className="w-full h-full rounded-full animate-ping bg-gradient-to-r from-blue-400 to-purple-400 opacity-30"></div>
                        </div>

                        {/* Content */}
                        <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200/50 group">
                                {/* Header */}
                                <div className="mb-4">
                                    <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2`}>
                                        {item.title}
                                    </h3>
                                    <div className={`text-lg font-semibold text-gray-800 mb-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                        {item.company}
                                    </div>
                                    <div className={`text-sm text-gray-600 mb-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                        {item.location}
                                    </div>
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                                        {item.dates}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 mb-4">
                                    {item.description}
                                </p>

                                {/* Responsibilities */}
                                <ul className="text-gray-700 mb-4 space-y-2">
                                    {item.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mr-3 mt-2 flex-shrink-0`}></div>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {item.technologies.map((tech, idx) => (
                                        <span key={idx} className={`px-3 py-1 bg-gradient-to-r ${item.color}/10 text-gray-800 rounded-full text-xs font-semibold border border-${item.color.split(' ')[0].split('-')[1]}-300/50`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Stats */}
            <div className={`text-center mt-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-8 py-4 shadow-lg">
                    <div className="flex gap-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">
                                {activeTab === 'experience' ? experiences.length : formations.length}
                            </div>
                            <div className="text-sm text-gray-600">
                                {activeTab === 'experience' ? 'Expériences' : 'Formations'}
                            </div>
                        </div>
                        <div className="w-px bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">
                                {activeTab === 'experience' ? '2023-2025' : '2015-2025'}
                            </div>
                            <div className="text-sm text-gray-600">Période</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}