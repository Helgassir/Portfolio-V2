import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import SkillTag from '../components/ui/SkillTag';

export default function AboutPage() {
  const { t } = useTranslation();

  const devSkills = useMemo(() => [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'C#', 'MySQL'
  ], []);

  const designSkills = useMemo(() => [
    'Figma', 'UI/UX', 'Responsive Design', 'Color Theory'
  ], []);

  const softSkills = useMemo(() => [
    'Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Adaptability'
  ], []);

  return (
    <PageTransition>
      <section className="section relative">
        {/* Background Blurs */}
        <div className="absolute top-40 left-0 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-secondary-100 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="container-custom">
          <SectionHeading 
            title={t('about.title')} 
            subtitle={t('about.subtitle')} 
            center 
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="relative mb-6">
                <img 
                  src="https://images.pexels.com/photos/5717464/pexels-photo-5717464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Portrait de Hajar El-Gassir" 
                  className="rounded-lg shadow-lg w-full object-cover aspect-[4/5]"
                />
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent-400 opacity-20 rounded-lg -z-10"></div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Hajar El-Gassir</h3>
                <ul className="space-y-3">
                  <li>
                    <h4 className="text-sm font-medium text-slate-500 mb-1">Email</h4>
                    <p className="text-slate-700">elgassirhajar@gmail.com</p>
                  </li>
                  <li>
                    <h4 className="text-sm font-medium text-slate-500 mb-1">LinkedIn</h4>
                    <a 
                      href="https://fr.linkedin.com/in/hajar-el-gassir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      linkedin.com/in/hajar-el-gassir
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-2xl font-semibold mb-4">{t('about.title')}</h3>
                <div className="prose max-w-none text-slate-700">
                  {t('about.content')
                    .split('\n\n')
                    .map((paragraph, idx) => (
                      <p key={idx} className="mb-4">{paragraph}</p>
                    ))}
                </div>
              </div>

              {/* Skills Sections */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-6">{t('about.skills')}</h3>
                
                {[ 
                  { label: t('about.skills.dev'), skills: devSkills, color: 'bg-primary-100 text-primary-700' },
                  { label: t('about.skills.design'), skills: designSkills, color: 'bg-secondary-100 text-secondary-700' },
                  { label: t('about.skills.soft'), skills: softSkills, color: 'bg-accent-100 text-accent-700' },
                ].map(({ label, skills, color }) => (
                  <div key={label} className="mb-6">
                    <h4 className="text-lg font-medium mb-4">{label}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map(skill => (
                        <SkillTag key={skill} name={skill} color={color} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
