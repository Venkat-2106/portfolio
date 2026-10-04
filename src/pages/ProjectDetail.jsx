import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>Project not found</h1>
        <Link to='/projects' className='text-[var(--accent)] hover:underline'>? Back to projects</Link>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <Link to='/projects' className='text-[var(--accent)] hover:underline mb-6 inline-block'>? Back to projects</Link>
      <div className='max-w-3xl mb-8'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>{project.title}</h1>
        <p className='text-xl text-gray-700 dark:text-gray-300 mb-6'>{project.tagline}</p>
        <div className='flex flex-wrap gap-4'>
          {project.liveUrl && project.liveUrl !== '[LIVE_URL]' && (
            <a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className='px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity'>
              Live Demo
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '[GITHUB_URL]' && (
            <a href={project.githubUrl} target='_blank' rel='noopener noreferrer' className='px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
              GitHub
            </a>
          )}
          {((project.liveUrl && project.liveUrl === '[LIVE_URL]') || (project.githubUrl && project.githubUrl === '[GITHUB_URL]')) && (
            <span className='px-4 py-2 text-sm bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-lg border border-amber-200 dark:border-amber-800'>
              Links marked [LIVE_URL] / [GITHUB_URL] - to be filled
            </span>
          )}
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2 space-y-8'>
          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Overview</h2>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>{project.overview}</p>
          </section>
          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Problem</h2>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>{project.problem}</p>
          </section>
          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>What I built</h2>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>{project.whatIBuilt}</p>
          </section>
          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Impact</h2>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>{project.impact}</p>
          </section>
          {project.screenshots && project.screenshots.length > 0 && (
            <section>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Screenshots</h2>
              <div className='space-y-4'>
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className='border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden'>
                    <img src={screenshot.placeholder} alt={screenshot.label} className='w-full h-auto' />
                    <p className='p-3 text-sm text-gray-600 dark:text-gray-400'>{screenshot.label}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        <div>
          <section className='border border-gray-200 dark:border-gray-800 rounded-lg p-6'>
            <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Tools</h2>
            <div className='flex flex-wrap gap-2'>
              {project.tools.map((tool) => (
                <span key={tool} className='px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300 text-sm'>
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
