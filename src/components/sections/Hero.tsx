import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
            Hajar El-Gassir
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-700 mb-8">
            {t('home.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            {t('home.intro')}
          </p>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ArrowDown className="text-primary-600 w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}