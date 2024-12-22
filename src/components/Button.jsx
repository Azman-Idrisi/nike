import React from 'react';

const Button = ({ children = 'Shop Now!' }) => {
  return (
    <button 
      className="
        bg-black hover:bg-gray-800
        text-white font-bold
        px-6 py-3
        rounded-full
        transform transition-all duration-200
        hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
        shadow-md hover:shadow-lg
        flex items-center gap-2
      "
    >
      {children}
      <svg 
        className="w-4 h-4 ml-1" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  );
};

export default Button;