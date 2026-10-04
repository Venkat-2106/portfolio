import { projects } from '../data/projects';

const Projects = () => {
  // Order: DataIQ, Power BI suite, VBA automation, Python workflows, SmartBillr last
  const orderedIds = ['dataiq', 'powerbi-suite', 'vba-automation', 'python-workflows', 'smartbillr'];
  const orderedProjects = orderedIds.map(id => projects.find(p => p.id === id)).filter(Boolean);

  return (
    <section id='projects' className='py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mb-10'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>Projects</h2>
          <p className='text-lg text-gray-700 dark:text-gray-300'>A selection of projects spanning automation, data analytics, and full-stack SaaS.</p>
        </div>
        <div className='space-y-6'>
          {orderedProjects.map((project) => {
            const hasGithub = project.githubUrl && !project.githubUrl.includes('[GITHUB_URL]');

            return (
              <div key={project.id} className='border border-gray-200 dark:border-gray-800 rounded-lg p-6'>
                <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-2'>{project.title}</h2>

                {/* Tagline - only if it has content */}
                {project.tagline && (
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>{project.tagline}</p>
                )}

                {/* What I built - only if it has content */}
                {project.whatIBuilt && (
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.whatIBuilt}</p>
                )}

                {/* Tools - render all tools from data (no filter hack needed) */}
                {project.tools && project.tools.length > 0 && (
                  <div className='flex flex-wrap gap-2 text-sm mb-4'>
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className='px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300'
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                {/* Outcome/impact - only if it has content */}
                {project.impact && (
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.impact}</p>
                )}

                {/* GitHub link - only if it's a real URL */}
                {hasGithub && (
                  <div className='flex gap-2'>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'
                    >
                      GitHub
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;