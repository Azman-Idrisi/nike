import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { navLinks } from '../constants';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/60 backdrop-blur-lg shadow-lg z-50">
      <nav className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-center h-[80px]">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Nike Logo"
              className="w-[129px] h-[29px]"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="flex-1 flex justify-center items-center gap-12 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-lg text-gray-700 hover:text-black relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 transition-transform group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-6">
            <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-gray-700 transition-transform duration-300 hover:scale-110" />
            <button className="px-6 py-2 font-montserrat text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-full shadow-lg transition-all">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <ShoppingBag className="w-6 h-6" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[80px] left-0 right-0 bg-white border-t shadow-md">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block font-montserrat text-lg text-gray-700 hover:text-black py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full mt-4 px-6 py-2.5 font-montserrat text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-full shadow-md transition-all">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
