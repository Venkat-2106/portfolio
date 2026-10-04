const About = () => {
  return (
    <section id='about' className='py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl'>
          <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8'>
            I am a Data Analyst and Automation Developer using Power BI, Excel, SQL and Python to cut manual work and speed up decisions. I also build full-stack web apps (React, FastAPI, PostgreSQL). My mission is to help businesses save time and make confident decisions using data.
          </p>
        </div>

        <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
          April 2020: Started a computer centre recognised as an FSSAI Mitra Centre. August 2023: Moved to Chennai, joined Samsung Electronics. May 2025: Joined Datazoic Machines. Present: Building SmartBillr and exploring AI/ML.
        </p>

        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6'>Experience</h2>
          <div className='space-y-8'>
            <div className='border-l border-gray-200 dark:border-gray-800 pl-6'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>Data Analyst, Datazoic Machines Pvt. Ltd.</h3>
              <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>May 2025 – Present</p>
              <div className='text-xs text-gray-500 dark:text-gray-400 mb-3'>Tools: Python, SQL, Excel, Tkinter</div>
              <ul className='list-disc list-inside space-y-1.5 text-sm text-gray-700 dark:text-gray-300'>
                <li>Built DataIQ for data validation and cleanup</li>
                <li>Automated validation pipelines for large Excel datasets</li>
                <li>Python/SQL/Excel transformation delivering reporting-ready datasets</li>
              </ul>
            </div>
            <div className='border-l border-gray-200 dark:border-gray-800 pl-6'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>Associate Partner, Samsung Electronics, Chennai</h3>
              <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>Aug 2023 – May 2025</p>
              <div className='text-xs text-gray-500 dark:text-gray-400 mb-3'>Tools: VBA, SQL, Apache Superset, Excel</div>
              <ul className='list-disc list-inside space-y-1.5 text-sm text-gray-700 dark:text-gray-300'>
                <li>VBA automation cut manual workload by 75%</li>
                <li>SQL analysis integrated into Apache Superset improved decision-making efficiency by 15%</li>
                <li>Managed the Master Pricing File for Home Appliances & Home Electronics</li>
                <li>Weekly B2B tier pricing; designed and QA-tested promotions for Samsung.com</li>
                <li>Received an appreciation mail for automation work</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6'>Skills</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>Data</h3>
              <div className='flex flex-wrap gap-2'>
                {['Power BI', 'DAX', 'Power Query', 'SQL', 'Excel', 'Apache Superset'].map(s => (
                  <span key={s} className='px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300'>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>Automation</h3>
              <div className='flex flex-wrap gap-2'>
                {['Python', 'VBA', 'Windows Task Scheduler'].map(s => (
                  <span key={s} className='px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300'>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>Web</h3>
              <div className='flex flex-wrap gap-2'>
                {['React', 'FastAPI', 'PostgreSQL', 'Tailwind', 'Supabase'].map(s => (
                  <span key={s} className='px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300'>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>Tools</h3>
              <div className='flex flex-wrap gap-2'>
                {['Git', 'Jira'].map(s => (
                  <span key={s} className='px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300'>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;