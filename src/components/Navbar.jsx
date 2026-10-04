import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

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

  return (
    <nav className='sticky top-0 z-10 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-14'>
          <a href='#home' className='font-bold text-lg text-gray-900 dark:text-white'>
            Venkat
          </a>
          <div className='hidden md:flex items-center space-x-8'>
            <a href='#home' className={`transition-colors ${isDark ? 'text-[var(--accent)]' : 'text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] dark:hover:text-[var(--accent)]'}`}>
              Home
            </a>
            <a href='#about' className={`transition-colors ${isDark ? 'text-[var(--accent)]' : 'text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] dark:hover:text-[var(--accent)]'}`}>
              About
            </a>
            <a href='#projects' className={`transition-colors ${isDark ? 'text-[var(--accent)]' : 'text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] dark:hover:text-[var(--accent)]'}`}>
              Projects
            </a>
            <a href='#skills' className={`transition-colors ${isDark ? 'text-[var(--accent)]' : 'text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] dark:hover:text-[var(--accent)]'}`}>
              Skills
            </a>
            <a href='#contact' className={`transition-colors ${isDark ? 'text-[var(--accent)]' : 'text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] dark:hover:text-[var(--accent)]'}`}>
              Contact
            </a>
            <button onClick={toggleDarkMode} className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors' aria-label='Toggle theme'>
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
          <div className='md:hidden flex items-center space-x-2'>
            <button onClick={toggleDarkMode} className='p-2' aria-label='Toggle theme'>
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;