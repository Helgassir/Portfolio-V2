import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  image?: string; // Chemin ou URL de l'image
  color?: string;
  index: number;
}

export default function ProjectCard({ id, image, color = 'bg-primary-500', index }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="card group h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className={`h-48 ${image ? '' : color} relative overflow-hidden`}>
        {image ? (
          <img 
            src={image} // ← CORRECTION ICI
            alt={t(`projects.${id}.title`)} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <span className="text-2xl font-bold uppercase tracking-wider">
              {t(`projects.${id}.title`).substring(0, 2)}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{t(`projects.${id}.title`)}</h3>
        <p className="text-slate-600 mb-4">{t(`projects.${id}.desc`)}</p>

        <div className="mb-5">
          <div className="flex flex-wrap gap-1 text-xs">
            {t(`projects.${id}.tech`).split(',').map((tech, idx) => (
              <span 
                key={idx} 
                className="px-2 py-1 bg-slate-100 rounded-md text-slate-600"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
          {t('projects.view')} →
        </button>
      </div>
    </motion.div>
  );
}
