import React, { useState } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  mobile?: boolean;
  isScrolled?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, mobile, isScrolled }) => {
  const [hoverColor, setHoverColor] = useState('');
  
  const colors = [
    'text-yellow-300',
    'text-pink-300',
    'text-green-300',
    'text-cyan-300',
    'text-orange-300',
    'text-purple-300',
    'text-red-300',
    'text-blue-300'
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setHoverColor(randomColor);
  };

  if (mobile) {
    return (
      <a
        href={href}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:font-bold hover:italic ${hoverColor} hover:transform hover:translate-x-2`}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={`relative font-medium transition-all duration-300 group hover:scale-110 hover:font-bold hover:italic ${
        isScrolled ? `text-white hover:${hoverColor}` : `text-gray-900 dark:text-white hover:${hoverColor}`
      }`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full group-hover:h-1`}></span>
    </a>
  );
};

export default NavLink;