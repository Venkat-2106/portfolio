import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='max-w-3xl mb-10'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>Projects</h1>
        <p className='text-lg text-gray-700 dark:text-gray-300'>A selection of projects spanning automation, data analytics, and full-stack SaaS.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map((project) => (
          <Link key={project.id} to={/projects/} className='block border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-shadow group'>
            <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[var(--accent)] transition-colors'>{project.title}</h2>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>{project.tagline}</p>
            <div className='flex flex-wrap gap-2'>
              {project.tools.map((tool) => (
                <span key={tool} className='text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300'>
                  {tool}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
