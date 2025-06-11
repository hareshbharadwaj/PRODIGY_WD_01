import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import NavLink from './NavLink';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navColor, setNavColor] = useState('bg-white/90');
  const { theme, toggleTheme } = useTheme();
  
  const navColors = [
    'bg-purple-600/90',
    'bg-pink-600/90',
    'bg-blue-600/90',
    'bg-green-600/90',
    'bg-yellow-500/90',
    'bg-red-600/90',
    'bg-indigo-600/90',
    'bg-cyan-600/90'
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        // Change nav color randomly when scrolled
        const randomColor = navColors[Math.floor(Math.random() * navColors.length)];
        setNavColor(randomColor);
      } else {
        setIsScrolled(false);
        setNavColor('bg-white/90');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? `${navColor} dark:bg-gray-900/90 backdrop-blur-md shadow-2xl` 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <a href="#" className={`text-2xl font-bold tracking-tighter transition-all duration-300 hover:scale-110 hover:rotate-3 ${
              isScrolled ? 'text-white hover:text-yellow-300' : 'text-gray-900 dark:text-white hover:text-purple-600'
            }`}>
              Horizon
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#home" label="Home" isScrolled={isScrolled} />
              <NavLink href="#features" label="Features" isScrolled={isScrolled} />
              <NavLink href="#services" label="Services" isScrolled={isScrolled} />
              <NavLink href="#testimonials" label="Testimonials" isScrolled={isScrolled} />
              <NavLink href="#contact" label="Contact" isScrolled={isScrolled} />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-180 ${
                isScrolled 
                  ? 'text-white hover:bg-yellow-400 hover:text-purple-900' 
                  : 'text-gray-700 dark:text-gray-200 hover:bg-purple-500 hover:text-white'
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-md transition-all duration-300 hover:scale-125 ${
                  isScrolled 
                    ? 'text-white hover:bg-yellow-400 hover:text-purple-900' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-purple-500 hover:text-white'
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
          <NavLink href="#home" label="Home" mobile isScrolled={true} />
          <NavLink href="#features" label="Features" mobile isScrolled={true} />
          <NavLink href="#services" label="Services" mobile isScrolled={true} />
          <NavLink href="#testimonials" label="Testimonials" mobile isScrolled={true} />
          <NavLink href="#contact" label="Contact" mobile isScrolled={true} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;