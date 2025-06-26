import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    { id: 'secure-messaging', color: 'bg-primary-500' },
    { id: 'keepcash', color: 'bg-secondary-600' },
    { id: 'fixthis', color: 'bg-accent-500' },
    { id: 'mytechlife', color: 'bg-emerald-500' }
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
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}