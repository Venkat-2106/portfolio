import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className='sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link to='/' className='font-bold text-xl text-gray-900 dark:text-white'>
            Venkat
          </Link>
          <div className='hidden md:flex items-center space-x-8'>
            <Link to='/' className={`transition-colors ${isActive('/') ? 'text-[var(--accent)]' : 'text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] dark:hover:text-[var(--accent)]'}`}>Home
              Home
            </Link>
            <Link to='/about' className={`transition-colors ${isActive('/about') ? 'text-[var(--accent)]' : 'text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] dark:hover:text-[var(--accent)]'}`}>About
              About
            </Link>
            <Link to='/projects' className={`transition-colors ${isActive('/projects') || location.pathname.startsWith('/projects/') ? 'text-[var(--accent)]' : 'text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] dark:hover:text-[var(--accent)]'}`}>Projects
              Projects
            </Link>
            <Link to='/journey' className={`transition-colors ${isActive('/journey') ? 'text-[var(--accent)]' : 'text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] dark:hover:text-[var(--accent)]'}`}>Journey
              Journey
            </Link>
            <Link to='/contact' className={`transition-colors ${isActive('/contact') ? 'text-[var(--accent)]' : 'text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] dark:hover:text-[var(--accent)]'}`}>Contact
              Contact
            </Link>
            <button
              onClick={toggleDarkMode}
              className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
              aria-label='Toggle theme'
            >
              {isDark ? '??' : '??'}
            </button>
          </div>
          <div className='md:hidden flex items-center space-x-2'>
            <button onClick={toggleDarkMode} className='p-2' aria-label='Toggle theme'>
              {isDark ? '??' : '??'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='p-2'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className='md:hidden pb-4 space-y-2'>
            <Link to='/' onClick={() => setIsMenuOpen(false)} className='block px-2 py-1'>Home</Link>
            <Link to='/about' onClick={() => setIsMenuOpen(false)} className='block px-2 py-1'>About</Link>
            <Link to='/projects' onClick={() => setIsMenuOpen(false)} className='block px-2 py-1'>Projects</Link>
            <Link to='/journey' onClick={() => setIsMenuOpen(false)} className='block px-2 py-1'>Journey</Link>
            <Link to='/contact' onClick={() => setIsMenuOpen(false)} className='block px-2 py-1'>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;