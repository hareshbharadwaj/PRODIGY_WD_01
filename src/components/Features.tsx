import React from 'react';
import { Monitor, Smartphone, Zap, Lock } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { useBackgroundColor } from '../hooks/useBackgroundColor';
const Features: React.FC = () => {
  const background = useBackgroundColor(5000); 
    const features = [
    {
      icon: <Monitor size={24} />,
      title: 'Responsive Design',
      description: 'Fully responsive layouts that look perfect on any device, from phones to desktops.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Lightning Fast',
      description: 'Optimized for speed with minimal load times and smooth animations.'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile First',
      description: 'Built with mobile users in mind, ensuring a great experience on smaller screens.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Secure & Reliable',
      description: 'Built with security best practices to keep your data safe and your site running smoothly.'
    }
  ];

  return (
    <section id="features" className={`py-20 ${background} dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 transition-all duration-1000`}>
    <section id="features" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 transition-all duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-purple-600 hover:scale-105 transition-all duration-300 cursor-default hover:font-extrabold">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto hover:text-pink-600 hover:font-semibold transition-all duration-300 cursor-default">
            Everything you need to create stunning, high-performance websites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section></section>
  );
};

export default Features;