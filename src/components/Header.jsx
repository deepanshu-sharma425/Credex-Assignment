import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              How It Works
            </a>
            <a href="#why-choose-us" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Why Choose Us
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors duration-300"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0 border-t dark:border-gray-800">
          <div className="py-2 px-4 space-y-3">
            <a 
              href="#how-it-works" 
              className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#why-choose-us" 
              className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="block py-2 px-5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm text-center transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;