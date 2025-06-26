import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, Linkedin, Mail, Code } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and about */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-600 text-white">
                <Code size={18} />
              </div>
              <span className="font-semibold text-lg">Hajar El-Gassir</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-xs">
              {t('home.intro').substring(0, 150)}...
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('nav.links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-primary-300 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-primary-300 transition-colors">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-primary-300 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-primary-300 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('contact.title')}</h3>
            <div className="space-y-3">
              <a 
                href="mailto:elgassirhajar@gmail.com" 
                className="flex items-center gap-2 text-slate-400 hover:text-primary-300 transition-colors"
              >
                <Mail size={16} />
                <span>elgassirhajar@gmail.com</span>
              </a>
              <a 
                href="https://fr.linkedin.com/in/hajar-el-gassir" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-slate-400 hover:text-primary-300 transition-colors"
              >
                <Linkedin size={16} />
                <span>Hajar El-Gassir</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-2 sm:mb-0">
            © {currentYear} Hajar El-Gassir. {t('footer.rights')}
          </p>
          <p className="text-slate-400 text-sm flex items-center">
            {t('footer.made-with')} <Heart size={14} className="text-accent-500 mx-1" /> {t('footer.and')} React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}