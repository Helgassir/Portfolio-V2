import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';

export default function HomePage() {
  const { t } = useTranslation();
  
  return (
    <PageTransition>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10 animated-gradient opacity-10"></div>
        
        <div className="container-custom py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hajar El-Gassir
                <div className="text-2xl md:text-3xl font-normal text-primary-600 mt-2">
                  {t('home.title')}
                </div>
              </h1>
              
              <p className="text-lg text-slate-700 mb-8 max-w-lg">
                {t('home.intro')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projects" 
                  className="btn btn-primary flex items-center gap-2"
                >
                  {t('home.cta')}
                  <ArrowRight size={18} />
                </Link>
                
                <Link 
                  to="/contact" 
                  className="btn btn-outline"
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </motion.div>
            
            {/* Image/visual element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Profile image would go here */}
                <img 
                  src="https://images.pexels.com/photos/5717464/pexels-photo-5717464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Hajar El-Gassir" 
                  className="rounded-lg shadow-xl max-w-sm w-full object-cover aspect-[3/4]"
                />
                
                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-lg bg-primary-500 -z-10"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-lg bg-secondary-500 opacity-80 -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Tech stack section */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold mb-2">{t('home.tech-stack')}</h2>
            <p className="text-slate-600">{t('home.tech-desc')}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'C#'].map((tech) => (
              <motion.div
                key={tech}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.random() * 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-md flex items-center justify-center mb-2">
                  <span className="text-primary-600 font-bold">{tech.substring(0, 2)}</span>
                </div>
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}