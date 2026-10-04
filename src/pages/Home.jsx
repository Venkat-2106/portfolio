const Home = () => {
  return (
    <section id='home' className='py-32 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-3'>
            Venkat
          </h1>
          <p className='text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6'>
            I turn messy data into dashboards, automation and working software.
          </p>
          {/* Role line */}
          <p className='text-lg text-gray-600 dark:text-gray-400 mb-8'>
            Data Analyst | Power BI, SQL, Python, Excel/VBA, automation
          </p>
          {/* Highlights row - only real numbers, quiet typography */}
          <div className='flex flex-wrap gap-4 mb-8'>
            <div className='text-center'>
              <p className='text-2xl font-bold text-[var(--accent)]'>75%</p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>less manual reporting effort</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-[var(--accent)]'>5,500+</p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>SKUs managed</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-[var(--accent)]'>15%</p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>better decision-making efficiency</p>
            </div>
          </div>
          {/* CTA buttons */}
          <div className='flex flex-wrap gap-4'>
            <a href='#projects' className='inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity'>
              View Projects
            </a>
            <a href='#contact' className='inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
              Contact Me
            </a>
            {import.meta.env.VITE_RESUME_URL && (
              <a href={import.meta.env.VITE_RESUME_URL} target='_blank' rel='noopener noreferrer' className='inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
                Resume
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;