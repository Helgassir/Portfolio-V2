import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12">
            {t('contact.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">{t('contact.info')}</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:elgassirhajar@gmail.com"
                    className="flex items-center gap-3 text-slate-700 hover:text-primary-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Mail size={18} />
                    </div>
                    <span>elgassirhajar@gmail.com</span>
                  </a>

                  <a
                    href="https://fr.linkedin.com/in/hajar-el-gassir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-700 hover:text-primary-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </div>
                    <span>linkedin.com/in/hajar-el-gassir</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-lg p-6 shadow-lg">
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-3 text-green-800">
                  <CheckCircle size={20} className="text-green-600" />
                  <p>{t('contact.form.success')}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-md border border-slate-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-md border border-slate-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-slate-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                      {t('loading')}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      {t('contact.form.submit')}
                      <ArrowRight size={18} />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}