

const Home = () => {
  return (
    <section id='home' className='min-h-screen relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='max-w-3xl'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4'>
            Venkat
          </h1>
          <p className='text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8'>
            I turn messy data into dashboards, automation and working software.
          </p>
          <div className='flex flex-wrap gap-4'>
            <a href='#projects' className='inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity'>
              View Projects
            </a>
            <a href='#contact' className='inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
