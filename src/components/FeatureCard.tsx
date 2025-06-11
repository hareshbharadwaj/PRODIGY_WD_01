import React, { useState } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const [hoverStyle, setHoverStyle] = useState('');
  
  const hoverStyles = [
    'bg-gradient-to-br from-purple-500 to-pink-500 text-white',
    'bg-gradient-to-br from-blue-500 to-cyan-500 text-white',
    'bg-gradient-to-br from-green-500 to-emerald-500 text-white',
    'bg-gradient-to-br from-yellow-500 to-orange-500 text-white',
    'bg-gradient-to-br from-red-500 to-pink-500 text-white',
    'bg-gradient-to-br from-indigo-500 to-purple-500 text-white'
  ];

  const handleMouseEnter = () => {
    const randomStyle = hoverStyles[Math.floor(Math.random() * hoverStyles.length)];
    setHoverStyle(randomStyle);
  };

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl p-8 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 hover:rotate-1 cursor-pointer ${hoverStyle}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHoverStyle('')}
    >
      <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 hover:scale-125 hover:rotate-12 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 hover:font-bold hover:italic transition-all duration-300">{title}</h3>
      <p className="hover:font-medium transition-all duration-300">{description}</p>
    </div>
  );
};

export default FeatureCard;