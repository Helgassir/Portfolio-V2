import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <PageTransition>
      <section className="section relative">
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        
        <div className="container-custom">
          <SectionHeading 
            title={t('contact.title')} 
            subtitle={t('contact.subtitle')} 
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-md p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6">{t('contact.info')}</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium text-primary-600 mb-2">
                      {t('contact.info.email')}
                    </h4>
                    <a 
                      href="mailto:elgassirhajar@gmail.com" 
                      className="flex items-center gap-3 text-slate-700 hover:text-primary-600 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <Mail size={18} />
                      </div>
                      <span>elgassirhajar@gmail.com</span>
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-primary-600 mb-2">
                      {t('contact.info.linkedin')}
                    </h4>
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
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6">{t('contact.form')}</h3>
                
                {/* Success message */}
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-3 text-green-800">
                    <CheckCircle size={20} className="text-green-600" />
                    <p>{t('contact.form.success')}</p>
                  </div>
                )}
                
                {/* Error message */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3 text-red-800">
                    <div className="mt-0.5">⚠️</div>
                    <p>{error || t('contact.form.error')}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                    />
                  </div>
                  
                  <div className="mb-5">
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                    />
                  </div>
                  
                  <div className="mb-5">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                        <span>{t('loading')}</span>
                      </>
                    ) : (
                      <>
                        <span>{t('contact.form.submit')}</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}