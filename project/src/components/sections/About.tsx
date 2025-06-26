import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillTag from '../ui/SkillTag';

export default function About() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const devSkills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'C#'];
  const designSkills = ['Figma', 'UI/UX', 'Responsive Design'];
  const softSkills = ['Communication', 'Teamwork', 'Problem Solving', 'Time Management'];

  return (
    <section id="about" className="py-20 relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h2>
            <div className="prose max-w-none text-slate-700">
              {t('about.content').split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('about.skills.dev')}</h3>
              <div className="flex flex-wrap gap-2">
                {devSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <SkillTag name={skill} color="bg-primary-100 text-primary-700" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">{t('about.skills.design')}</h3>
              <div className="flex flex-wrap gap-2">
                {designSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <SkillTag name={skill} color="bg-secondary-100 text-secondary-700" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">{t('about.skills.soft')}</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  >
                    <SkillTag name={skill} color="bg-accent-100 text-accent-700" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}