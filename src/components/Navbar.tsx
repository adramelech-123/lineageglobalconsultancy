import { useState, useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className={`text-2xl font-bold ${
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}>
              L<span className="text-red-700">GC</span>
            </span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {['Services', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-900 dark:text-white hover:text-[--primary]'
                    : 'text-white hover:text-gray-300'
                }`}
              >
                {item}
              </a>
            ))}
            {/* <ThemeToggle /> */}
            <button className="btn-primary">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Services', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-white hover:text-[--primary] dark:hover:text-[--primary]"
              >
                {item}
              </a>
            ))}
            <button className="w-full btn-primary mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;