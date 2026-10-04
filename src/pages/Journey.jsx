const Journey = () => {
  return (
    <section id='journey' className='py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mb-10'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>Journey</h1>
          <p className='text-lg text-gray-700 dark:text-gray-300'>Professional milestones.</p>
        </div>
        <div className='space-y-6'>
          <div className='border-l border-gray-200 dark:border-gray-800 pl-6 py-4'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>April 2020</h3>
            <p className='text-gray-700 dark:text-gray-300'>Started a computer center while in college, later recognised as an FSSAI Mitra Center.</p>
          </div>
          <div className='border-l border-gray-200 dark:border-gray-800 pl-6 py-4'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>August 2023</h3>
            <p className='text-gray-700 dark:text-gray-300'>Moved to Chennai and joined Samsung Electronics. Discovered automation through Tier Pricing, SLA Dashboard, and JIRA Dashboard mail automations.</p>
          </div>
          <div className='border-l border-gray-200 dark:border-gray-800 pl-6 py-4'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>May 2025</h3>
            <p className='text-gray-700 dark:text-gray-300'>Joined Datazoic Machines as Data Analyst. Built DataIQ and automated validation pipelines for large Excel datasets.</p>
          </div>
          <div className='border-l border-gray-200 dark:border-gray-800 pl-6 py-4'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>Present</h3>
            <p className='text-gray-700 dark:text-gray-300'>Building SmartBillr, a multi-tenant billing and inventory SaaS, and exploring AI/ML.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;