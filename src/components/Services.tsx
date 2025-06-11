import React, { useState } from 'react';
import { Code, Palette, Globe, MessageSquare } from 'lucide-react';
import { useBackgroundColor } from '../hooks/useBackgroundColor';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const [hoverStyle, setHoverStyle] = useState('');
  
  const hoverStyles = [
    'bg-gradient-to-br from-purple-600 to-pink-600 text-white',
    'bg-gradient-to-br from-blue-600 to-cyan-600 text-white',
    'bg-gradient-to-br from-green-600 to-emerald-600 text-white',
    'bg-gradient-to-br from-yellow-600 to-orange-600 text-white',
    'bg-gradient-to-br from-red-600 to-pink-600 text-white',
    'bg-gradient-to-br from-indigo-600 to-purple-600 text-white'
  ];

  const handleMouseEnter = () => {
    const randomStyle = hoverStyles[Math.floor(Math.random() * hoverStyles.length)];
    setHoverStyle(randomStyle);
  };

  return (
    <div 
      className={`relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 hover:rotate-2 cursor-pointer ${hoverStyle}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHoverStyle('')}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-bl-3xl -mr-10 -mt-10 transition-all duration-300 group-hover:bg-yellow-300"></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white mb-6 hover:scale-125 hover:rotate-12 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 hover:font-extrabold hover:italic transition-all duration-300">{title}</h3>
        <p className="mb-6 hover:font-medium transition-all duration-300">{description}</p>
        <a href="#contact" className="inline-flex items-center font-medium hover:font-bold transition-all duration-300 hover:scale-110">
          Learn more
          <svg className="ml-2 w-4 h-4 hover:scale-150 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const background = useBackgroundColor(6000);
    const services = [
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'We build fast, responsive, and accessible websites that provide an exceptional user experience across all devices.'
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Our design team creates beautiful, intuitive interfaces that engage users and communicate your brand effectively.'
    },
    {
      icon: <Globe size={24} />,
      title: 'SEO Optimization',
      description: 'We optimize your website for search engines to improve visibility and drive more organic traffic to your business.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Content Strategy',
      description: 'We develop content strategies that tell your story, connect with your audience, and drive conversions.'
    }
  ];

  return (
    <section id="services" className={`py-20 ${background} dark:from-gray-900 dark:to-gray-800 transition-all duration-1000`}>
    <section id="services" className="py-20 bg-gradient-to-br from-pink-50 via-yellow-50 to-green-50 dark:from-gray-900 dark:via-green-900 dark:to-gray-800 transition-all duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-green-600 hover:scale-105 transition-all duration-300 cursor-default hover:font-extrabold">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 hover:text-yellow-600 hover:font-semibold transition-all duration-300 cursor-default">
            We offer a wide range of digital services to help your business thrive online
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section></section>
  );
};

export default Services;