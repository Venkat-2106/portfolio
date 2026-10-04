const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='max-w-3xl'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>About</h1>
        <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8'>
          I am a Data Analyst and Automation Developer using Power BI, Excel, SQL and Python to cut manual work and speed up decisions. I also build full-stack web apps (React, FastAPI, PostgreSQL). My mission is to help businesses save time and make confident decisions using data.
        </p>
      </div>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6'>Experience</h2>
        <div className='space-y-8'>
          <div className='border-l border-gray-200 dark:border-gray-800 pl-6'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>Data Analyst, Datazoic Machines Pvt. Ltd.</h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>May 2025 ï¿½ Present</p>
            <ul className='list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300'>
              <li>Built DataIQ (Python desktop app for data validation and cleanup, menu-driven, live log panel)</li>
              <li>Automated validation pipelines for large Excel datasets (comparison, mismatch detection, duplicate cleanup, standardisation)</li>
              <li>Python/SQL/Excel transformation delivering reporting-ready datasets</li>
            </ul>
          </div>
          <div className='border-l border-gray-200 dark:border-gray-800 pl-6'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>Associate Partner, Samsung Electronics, Chennai</h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>Aug 2023 ï¿½ May 2025</p>
            <ul className='list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300'>
              <li>VBA automation cut manual workload by 75%</li>
              <li>SQL analysis integrated into Apache Superset improved decision-making efficiency by 15%</li>
              <li>Managed the Master Pricing File for Home Appliances & Home Electronics (12 weeks, 15+ sheets, 5,500+ SKUs)</li>
              <li>Weekly B2B tier pricing; designed and QA-tested promotions for Samsung.com</li>
              <li>Competitive pricing analysis for brand stores; received an appreciation mail for automation work</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6'>Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='border border-gray-200 dark:border-gray-800 rounded-lg p-4'>Python tool development</div>
          <div className='border border-gray-200 dark:border-gray-800 rounded-lg p-4'>Power BI dashboards</div>
          <div className='border border-gray-200 dark:border-gray-800 rounded-lg p-4'>Python data analysis</div>
          <div className='border border-gray-200 dark:border-gray-800 rounded-lg p-4'>Excel/VBA automation</div>
          <div className='border border-gray-200 dark:border-gray-800 rounded-lg p-4'>Data cleaning and SQL analysis</div>
        </div>
      </section>

      <section>
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
      </section>
    </div>
  );
};

export default About;
