import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [hoverColor, setHoverColor] = useState('');
  
  const colors = [
    'text-purple-400',
    'text-pink-400',
    'text-blue-400',
    'text-green-400',
    'text-yellow-400',
    'text-red-400'
  ];

  const handleMouseEnter = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setHoverColor(randomColor);
  };
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-950 dark:from-gray-950 dark:via-purple-950 dark:to-black text-white pt-16 pb-8 transition-all duration-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="hover:scale-105 transition-all duration-300">
            <a href="#" className="text-2xl font-bold tracking-tighter mb-6 inline-block hover:text-yellow-400 hover:scale-110 hover:rotate-3 transition-all duration-300">
              Horizon
            </a>
            <p className="text-gray-400 mb-6 max-w-xs hover:text-white hover:font-medium transition-all duration-300 cursor-default">
              Creating beautiful, functional, and accessible websites that help businesses succeed online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125 hover:rotate-12" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-125 hover:rotate-12" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:rotate-12" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-6 hover:text-purple-400 hover:font-bold transition-all duration-300 cursor-default">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-all duration-300 hover:font-bold hover:scale-110 hover:translate-x-2">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:font-bold hover:scale-110 hover:translate-x-2">Team</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:font-bold hover:scale-110 hover:translate-x-2">Careers</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-all duration-300 hover:font-bold hover:scale-110 hover:translate-x-2">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div className="hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-6 hover:text-green-400 hover:font-bold transition-all duration-300 cursor-default">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:font-bold hover:scale-110 hover:translate-x-2">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:font-bold hover:scale-110 hover:translate-x-2">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:font-bold hover:scale-110 hover:translate-x-2">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:font-bold hover:scale-110 hover:translate-x-2">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:font-bold hover:scale-110 hover:translate-x-2">Support</a>
              </li>
            </ul>
          </div>
          
          <div className="hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-6 hover:text-yellow-400 hover:font-bold transition-all duration-300 cursor-default">Newsletter</h3>
            <p className="text-gray-400 mb-4 hover:text-white hover:font-medium transition-all duration-300 cursor-default">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white w-full hover:bg-gray-700 hover:scale-105 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-purple-600 text-white px-4 py-2 rounded-r-lg transition-all duration-300 hover:scale-110 hover:font-bold"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500 hover:text-gray-300 transition-all duration-300 cursor-default">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p 
              className={`text-gray-500 text-sm mb-4 md:mb-0 hover:text-white transition-all duration-300 cursor-default hover:font-medium ${hoverColor}`}
              onMouseEnter={handleMouseEnter}
            >
              &copy; {currentYear} Horizon. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm hover:font-bold hover:scale-110 transition-all duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm hover:font-bold hover:scale-110 transition-all duration-300">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm hover:font-bold hover:scale-110 transition-all duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;