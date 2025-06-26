import { useTranslation } from 'react-i18next';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';

export default function ProjectsPage() {
  const { t } = useTranslation();
  
  const projects = [
    { 
      id: 'secure-messaging', 
      color: 'bg-primary-500' 
    },
    { 
      id: 'keepcash', 
      color: 'bg-secondary-600' 
    },
    { 
      id: 'fixthis', 
      color: 'bg-accent-500' 
    },
    { 
      id: 'mytechlife', 
      color: 'bg-emerald-500' 
    }
  ];
  
  return (
    <PageTransition>
      <section className="section relative">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        
        <div className="container-custom">
          <SectionHeading 
            title={t('projects.title')} 
            subtitle={t('projects.subtitle')} 
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                color={project.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}