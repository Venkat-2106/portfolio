import { useEffect, useState } from 'react';

const Navbar = () => {
  // Initialize isDark from localStorage on mount, no setState in effect
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    // fall back to OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Sync the <html> class and localStorage when isDark changes
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll-spy: track which section is visible and add active class to nav link
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', offset: -1 },
        { id: 'about', offset: -1 },
        { id: 'projects', offset: -1 },
        { id: 'skills', offset: -1 },
        { id: 'contact', offset: -1 },
      ];

      const scrollPos = window.innerHeight / 2 + window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        if (top <= scrollPos && bottom > scrollPos) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Map active section to link text color
  const getLinkColor = (section) => {
    if (section === activeSection) {
      return 'text-[var(--accent)]';
    }
    return isDark ? 'text-gray-700 dark:text-gray-300' : 'text-gray-700';
  };

  return (
    <nav className='sticky top-0 z-10 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-14'>
          <a href='#home' className='font-bold text-lg text-gray-900 dark:text-white'>
            Venkat
          </a>
          <div className='hidden md:flex items-center space-x-8'>
            <a href='#home' className={`transition-colors ${getLinkColor('home')}`}>
              Home
            </a>
            <a href='#about' className={`transition-colors ${getLinkColor('about')}`}>
              About
            </a>
            <a href='#projects' className={`transition-colors ${getLinkColor('projects')}`}>
              Projects
            </a>
            <a href='#skills' className={`transition-colors ${getLinkColor('skills')}`}>
              Skills
            </a>
            <a href='#contact' className={`transition-colors ${getLinkColor('contact')}`}>
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
            <button
              onClick={toggleMenu}
              className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
              aria-expanded={isMenuOpen}
              aria-label='Open main navigation'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu drawer */}
        {isMenuOpen && (
          <div className='fixed inset-0 z-20 bg-white/95 dark:bg-gray-950/90 backdrop-blur-sm flex flex-col items-center pt-20 gap-6'>
            <button
              onClick={toggleMenu}
              className='absolute top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800'
              aria-label='Close menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <div className='flex flex-col gap-4'>
              <a
                href='#home'
                className='font-bold text-lg text-gray-900 dark:text-white'
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href='#about'
                className='text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] transition-colors'
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href='#projects'
                className='text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] transition-colors'
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href='#skills'
                className='text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] transition-colors'
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                href='#contact'
                className='text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] transition-colors'
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;