import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

          <div className="flex flex-col items-center space-y-6">
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
        </motion.div>
      </div>
    </section>
  );
}
