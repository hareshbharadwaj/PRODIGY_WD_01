import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonColor, setButtonColor] = useState('bg-blue-600');

  const colors = [
    'bg-purple-600',
    'bg-pink-600',
    'bg-blue-600',
    'bg-green-600',
    'bg-yellow-600',
    'bg-red-600',
    'bg-indigo-600',
    'bg-cyan-600'
  ];

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Change color when clicked
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setButtonColor(randomColor);
  };

  const handleMouseEnter = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setButtonColor(randomColor);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={handleMouseEnter}
      className={`fixed bottom-6 right-6 p-3 rounded-full ${buttonColor} text-white shadow-lg transition-all duration-300 z-50 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 hover:scale-125 hover:rotate-12 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;