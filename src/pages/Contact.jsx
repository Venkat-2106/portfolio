import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus('error');
      return;
    }

    const formDataObj = {
      access_key: accessKey,
      name: formData.name,
      message: formData.message,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id='contact' className='py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mb-10'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>Contact</h2>
          <p className='text-lg text-gray-700 dark:text-gray-300 mb-6'>I'm open to Data Analyst and BI opportunities. Send me a message.</p>
        </div>

        {/* Location shown once, only if no email env var or always shown */}
        <p className='text-sm text-gray-600 dark:text-gray-400 mb-6'>
          Location: Chennai, India
        </p>

        {/* Honeypot - hidden checkbox per Web3Forms docs */}
        <input
          type='checkbox'
          name='botcheck'
          tabIndex={-1}
          aria-hidden='true'
          className='hidden'
        />

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

          {/* Status messages in aria-live region */}
          <div aria-live='polite' aria-atomic='true' className='space-y-2 text-sm'>
            {status === 'submitting' && (
              <p className='text-amber-600'>Sending message...</p>
            )}
            {status === 'success' && (
              <p className='text-green-600'>Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className='text-red-600'>Failed to send message. Please try again.</p>
            )}
          </div>

          <button
            type='submit'
            disabled={status === 'submitting'}
            className='px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50'
            aria-disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;