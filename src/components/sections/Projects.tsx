import { useTranslation } from 'react-i18next'; 
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../ui/ProjectCard';

// Import des images correctement
import secureMessagingImg from '../../assets/secure-messaging.jpg';
import keepCashImg from '../../assets/keepcash.jpg';
import fixThisImg from '../../assets/fixthis.png';
import ofemimaImg from '../../assets/ofemima_RVB.jpg';

export default function Projects() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    { id: 'secure-messaging', color: 'bg-primary-500', image: secureMessagingImg },
    { id: 'keepcash', color: 'bg-secondary-600', image: keepCashImg },
    { id: 'fixthis', color: 'bg-accent-500', image: fixThisImg },
    { id: 'Ôfemima', color: 'bg-emerald-500', image: ofemimaImg }
  ];

  return (
    <section id="projects" className="py-20 bg-white/80 backdrop-blur-lg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                color={project.color}
                image={project.image} 
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
