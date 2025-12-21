import { useState, useEffect } from 'react';

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('languages');

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const skillsData = {
        languages: {
            title: 'Langages & Frameworks',
            skills: [
                { name: 'React', level: 80, color: 'from-cyan-400 to-blue-400' },
                { name: 'Node.js', level: 60, color: 'from-green-400 to-emerald-400' },
                { name: 'Tailwind CSS', level: 60, color: 'from-cyan-400 to-blue-400' },
                { name: 'Laravel', level: 65, color: 'from-red-400 to-orange-400' },
                { name: 'PostgreSQL', level: 60, color: 'from-purple-400 to-pink-400' },
                { name: 'MySQL', level: 75, color: 'from-blue-400 to-indigo-400' }
            ]
        },
        tools: {
            title: 'Outils',
            skills: [
                { name: 'Git & GitHub', level: 75, color: 'from-gray-400 to-gray-600' },
                { name: 'Vercel & Railway', level: 65, color: 'from-purple-400 to-pink-400' },
                { name: 'REST APIs', level: 88, color: 'from-green-400 to-emerald-400' },
                { name: 'VS Code', level: 95, color: 'from-blue-400 to-purple-400' },
                { name: 'Figma', level: 30, color: 'from-pink-400 to-purple-400' }
            ]
        },
        languages_spoken: {
            title: 'Langues',
            skills: [
                { name: 'Français', level: 100, color: 'from-blue-400 to-indigo-400' },
                { name: 'Anglais', level: 45, color: 'from-red-400 to-pink-400' },
         
            ]
        }
    };

    return (
        <section id="competences" className="min-h-screen py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
            {/* Background animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Animated Title */}
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-5xl md:text-7xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                        Compétences
                    </span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            {/* Tabs Navigation */}
            <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/30 rounded-full p-2 flex gap-2">
                    {Object.entries(skillsData).map(([key, data]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeTab === key
                                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                            }`}
                        >
                            {data.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="relative z-10">
                {Object.entries(skillsData).map(([key, data]) => (
                    <div
                        key={key}
                        className={`transform transition-all duration-500 ${
                            activeTab === key
                                ? 'translate-x-0 opacity-100'
                                : 'translate-x-10 opacity-0 absolute inset-0 pointer-events-none'
                        }`}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {data.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/20 group">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`}>
                                                {skill.name}
                                            </h3>
                                            <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white`}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        
                                        {/* Progress Bar */}
                                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                                            <div 
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                                                style={{ 
                                                    width: isVisible && activeTab === key ? `${skill.level}%` : '0%',
                                                    transitionDelay: `${index * 100 + 500}ms`
                                                }}
                                            ></div>
                                        </div>
                                        
                                        {/* Category Badge */}
                                        <div className="mt-4 flex justify-between items-center">
                                            <span className="text-xs text-gray-400 uppercase tracking-wider">
                                                {data.title}
                                            </span>
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} animate-pulse`}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Stats */}
            <div className={`text-center mt-20 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="inline-flex items-center bg-gradient-to-r from-purple-400/20 to-cyan-400/20 backdrop-blur-lg border border-purple-400/30 rounded-full px-8 py-4">
                    <div className="flex gap-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">
                                {Object.values(skillsData).reduce((acc, cat) => acc + cat.skills.length, 0)}+
                            </div>
                            <div className="text-sm text-gray-400">Compétences</div>
                        </div>
                        <div className="w-px bg-gray-600"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">3</div>
                            <div className="text-sm text-gray-400">Catégories</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}