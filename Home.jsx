import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        <div className='max-w-3xl'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6'>
            Venkat — I turn messy data into dashboards, automation and working software.
          </h1>
          <div className='flex flex-wrap gap-4 mb-6'>
            <Link to='/projects' className='inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity'>
              View Projects
            </Link>
            <Link to='/contact' className='inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
              Contact Me
            </Link>
          </div>
          <div className='flex gap-4 text-gray-600 dark:text-gray-400'>
            <a href='https://www.linkedin.com/in/venkatesh-kumar-5a2a2631a/' target='_blank' rel='noopener noreferrer' className='hover:text-[var(--accent)] transition-colors'>LinkedIn</a>
            <a href='https://github.com/Venkat-2106' target='_blank' rel='noopener noreferrer' className='hover:text-[var(--accent)] transition-colors'>GitHub</a>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800'>
          <div className='text-center'>
            <p className='text-2xl md:text-3xl font-bold text-[var(--accent)]'>75%</p>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>less manual reporting effort</p>
          </div>
          <div className='text-center'>
            <p className='text-2xl md:text-3xl font-bold text-[var(--accent)]'>5,500+</p>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>SKUs managed</p>
          </div>
          <div className='text-center'>
            <p className='text-2xl md:text-3xl font-bold text-[var(--accent)]'>4+</p>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>production-style automation projects</p>
          </div>
          <div className='text-center'>
            <p className='text-2xl md:text-3xl font-bold text-[var(--accent)]'>1</p>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>live SaaS product (SmartBillr)</p>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='max-w-3xl mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>About me</h2>
          <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
            I am a Data Analyst and Automation Developer using Power BI, Excel, SQL and Python to cut manual work and speed up decisions. I also build full-stack web apps (React, FastAPI, PostgreSQL). My mission is to help businesses save time and make confident decisions using data.
          </p>
          <Link to='/about' className='inline-block mt-4 text-[var(--accent)] font-medium hover:underline'>Learn more ?</Link>
        </div>

        <div className='mb-10'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>Featured Projects</h2>
            <Link to='/projects' className='text-[var(--accent)] font-medium hover:underline'>View all ?</Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {featuredProjects.map((project) => (
              <Link key={project.id} to={\/projects/\\} className='block border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-shadow group'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[var(--accent)] transition-colors'>{project.title}</h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>{project.tagline}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className='text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300'>
                      {tool}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className='mb-10'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>Skills</h2>
            <Link to='/about' className='text-[var(--accent)] font-medium hover:underline'>More details ?</Link>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <span className='px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded text-center text-gray-700 dark:text-gray-300'>Power BI</span>
            <span className='px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded text-center text-gray-700 dark:text-gray-300'>SQL</span>
            <span className='px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded text-center text-gray-700 dark:text-gray-300'>Python</span>
            <span className='px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded text-center text-gray-700 dark:text-gray-300'>VBA</span>
            <span className='px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded text-center text-gray-700 dark:text-gray-300'>React</span>
            <span className='px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded text-center text-gray-700 dark:text-gray-300'>FastAPI</span>
            <span className='px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded text-center text-gray-700 dark:text-gray-300'>PostgreSQL</span>
            <span className='px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded text-center text-gray-700 dark:text-gray-300'>Excel</span>
          </div>
        </div>

        <div className='bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4'>Journey teaser</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-6'>From starting a computer center in 2020 to building full-stack SaaS products today.</p>
          <Link to='/journey' className='inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity'>
            See my journey
          </Link>
        </div>

        <div className='mt-12 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4'>Open to opportunities and freelance projects</h2>
          <Link to='/contact' className='inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity'>
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
