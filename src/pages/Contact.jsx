import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '[EMAIL]',
          ...formData,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='max-w-3xl mb-10'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>Contact</h1>
        <p className='text-lg text-gray-700 dark:text-gray-300 mb-6'>
          Get in touch for opportunities and freelance projects.
        </p>
        <div className='space-y-2 text-gray-700 dark:text-gray-300'>
          <p>Email: [EMAIL]</p>
          <p>Location: Chennai, India</p>
          <div className='flex gap-4 pt-2'>
            <a href='https://www.linkedin.com/in/venkatesh-kumar-5a2a2631a/' target='_blank' rel='noopener noreferrer' className='text-[var(--accent)] hover:underline'>LinkedIn</a>
            <a href='https://github.com/Venkat-2106' target='_blank' rel='noopener noreferrer' className='text-[var(--accent)] hover:underline'>GitHub</a>
          </div>
        </div>
      </div>

      <div className='max-w-2xl'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]'
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]'
            />
          </div>
          <button
            type='submit'
            disabled={status === 'submitting'}
            className='px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50'
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className='text-green-600 dark:text-green-400'>Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className='text-red-600 dark:text-red-400'>Failed to send message. Please try again.</p>
          )}
        </form>
        <div className='mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg'>
          <p className='text-sm text-amber-700 dark:text-amber-400'>
            Note: The contact form is configured for Web3Forms. Replace [EMAIL] with your actual Web3Forms access key. Also add a 'Download Rï¿½sumï¿½' button on the Home/About page as needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
