import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useBackgroundColor } from '../hooks/useBackgroundColor';
const Hero: React.FC = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const background = useBackgroundColor(4000);
  const backgrounds = [
    'bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500',
    'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
    'bg-gradient-to-br from-green-400 via-blue-500 to-purple-600',
    'bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500',
    'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
    'bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600'
  ];

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      window.scrollTo({
        top: featuresSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={`relative min-h-screen ${background} dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-all duration-1000`}>
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center ${backgrounds[backgroundIndex]} dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-all duration-1000`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-40 dark:opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-white/30 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white/25 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 hover:scale-105 transition-all duration-300 cursor-default hover:text-yellow-300">
            <span className="block hover:font-extrabold transition-all duration-300">Elevate Your Digital</span>
            <span className="block hover:text-pink-300 hover:italic transition-all duration-300">Experience</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto hover:text-yellow-200 hover:font-semibold transition-all duration-300 cursor-default">
            Create stunning, responsive websites with our cutting-edge design system. Fast, accessible, and beautiful.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-yellow-400 hover:text-purple-900 hover:font-bold hover:scale-110">
              Get Started
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-pink-500 hover:border-pink-500 hover:font-bold hover:scale-110">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <button 
          onClick={scrollToFeatures} 
          aria-label="Scroll to features"
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white shadow-lg hover:shadow-xl transition-all hover:bg-yellow-400 hover:text-purple-900 hover:scale-125 duration-300"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section></section>
  );
};

export default Hero;