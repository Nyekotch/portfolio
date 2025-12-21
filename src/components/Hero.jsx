import { useState, useEffect, useMemo } from 'react';
import Bagg from "../outils/Bagg"
import LottieAnimation from "../outils/lotties/lotties"

export default function Hero() {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) {
      const interval = setInterval(() => {
        const numbers = Array.from({ length: 20 }, () =>
          Math.floor(Math.random() * 100)
        );
        setRandomNumbers(numbers);
      }, 100);

      return () => clearInterval(interval);
    } else {
      setRandomNumbers([]);
    }
  }, [isHovering]);

  const animatedNumbers = useMemo(() =>
    randomNumbers.map((number, index) => ({
      id: `${number}-${index}`,
      value: number,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${3 + Math.random() * 2}s`,
      animationDelay: `${Math.random() * 2}s`
    })), [randomNumbers]
  );

  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-gray-900"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label="Hero section with animated background"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) translateX(0px);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            50% { 
              transform: translateY(-20px) translateX(10px);
            }
          }
          @keyframes phrase1 {
            0%, 100% {
              opacity: 0;
              transform: translateX(-20px);
            }
            10%, 40% {
              opacity: 1;
              transform: translateX(0);
            }
            50% {
              opacity: 0;
              transform: translateX(20px);
            }
          }
          @keyframes phrase2 {
            0%, 50%, 100% {
              opacity: 0;
              transform: translateX(20px);
            }
            60%, 90% {
              opacity: 1;
              transform: translateX(0);
            }
            70%, 80% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
          @media (max-width: 640px) {
            @keyframes phrase1 {
              0%, 100% {
                opacity: 0;
                transform: translateX(-10px);
              }
              10%, 40% {
                opacity: 1;
                transform: translateX(0);
              }
              50% {
                opacity: 0;
                transform: translateX(10px);
              }
            }
            @keyframes phrase2 {
              0%, 50%, 100% {
                opacity: 0;
                transform: translateX(10px);
              }
              60%, 90% {
                opacity: 1;
                transform: translateX(0);
              }
            }
          }
        `
      }} />

      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {animatedNumbers.map((num) => (
            <div
              key={num.id}
              className="absolute text-cyan-400/15 font-mono text-sm"
              style={{
                left: num.left,
                top: num.top,
                animation: `float ${num.animationDuration} ease-in-out infinite`,
                animationDelay: num.animationDelay
              }}
            >
              {num.value}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 relative z-10">
        <div className="w-full md:w-3/5 space-y-6 text-center md:text-left py-8 md:py-0 relative z-20">
          <div className="inline-flex items-center bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full mb-4 shadow-xl shadow-white/10">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-white to-gray-200 rounded-full mr-2.5 animate-pulse shadow-sm" aria-hidden="true"></span>
            <span className="font-medium tracking-wide">Développeur Web Full Stack</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Nyekotch
            </span>
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Vincent de Paul
            </span>
          </h1>
          

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4 max-w-lg">
            <p className="text-lg sm:text-xl md:text-2xl whitespace-nowrap text-center sm:text-left" style={{ animation: 'phrase1 5s ease-in-out infinite' }}>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400">Je suis développeur web fullstack</span>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl whitespace-nowrap text-center sm:text-left" style={{ animation: 'phrase2 5s ease-in-out infinite' }}>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">Je conçois les applications web</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Bagg>
              Me Contacter
            </Bagg>
          </div>

          <SocialLinks />
        </div>

        <div className="absolute md:relative w-72 h-72 md:w-96 md:h-96 top-32 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:top-auto md:right-0 flex justify-center items-center z-10 md:z-0">
          <LottieAnimation />
        </div>
      </div>
    </section>
  );
}

function SocialLinks() {
  const links = [
    {
      href: "https://github.com/Nyekotch",
      label: "GitHub",
      icon: Github
    },
    {
      href: "https://www.linkedin.com/in/vincent-de-paul-nyekotch",
      label: "LinkedIn",
      icon: Linkedin
    },
    {
      href: "/",
      label: "Portfolio",
      icon: Globe
    }
  ];

  return (
    <div className="flex items-center justify-center md:justify-start space-x-6 mt-8">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transition-colors"
          aria-label={`Visit ${link.label} profile`}
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}

// Icon components
function Github({ className }) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function Linkedin({ className }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Globe({ className }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
