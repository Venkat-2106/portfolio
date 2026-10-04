import { journeyEvents } from '../data/journey';

const Journey = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='max-w-3xl mb-10'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>Journey</h1>
        <p className='text-lg text-gray-700 dark:text-gray-300'>My professional and personal journey so far.</p>
      </div>
      <div className='relative border-l border-gray-200 dark:border-gray-800 pl-8 ml-4 space-y-12'>
        {journeyEvents.map((event, index) => (
          <div key={index} className='relative'>
            <div className='absolute -left-10 top-1 w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-white dark:border-gray-950'></div>
            <div>
              <div className='flex items-baseline gap-3 mb-2'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>{event.year}</h2>
                {event.month && <span className='text-gray-600 dark:text-gray-400'>{event.month}</span>}
              </div>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>{event.title}</h3>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
