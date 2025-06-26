import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { Heart, Linkedin, Mail } from 'lucide-react';
import logo from '../../assets/logo.jpg';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: t('nav.home'), id: 'hero' },
    { name: t('nav.projects'), id: 'projects' },
    { name: t('nav.about'), id: 'about' },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo et intro */}
          <div>
            <RouterLink to="/" className="flex items-center gap-2 mb-4">
              <img
                src={logo} // ✅ Image importée correctement
                alt="Logo Hajar El-Gassir"
                className="w-9 h-9 rounded-lg object-cover"
                loading="lazy"
              />
              <span className="font-semibold text-lg">Hajar El-Gassir</span>
            </RouterLink>
            <p className="text-slate-400 text-sm max-w-xs">
              {t('home.intro').substring(0, 150)}...
            </p>
          </div>

          {/* Liens de navigation */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('nav.links')}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-primary-300 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos de contact */}
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

        {/* Bas de page */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-2 sm:mb-0">
            © {currentYear} Hajar El-Gassir. {t('footer.rights')}
          </p>
          <p className="text-slate-400 text-sm flex items-center">
            {t('footer.made-with')}
            <Heart size={14} className="text-accent-500 mx-1" />
            {t('footer.and')} React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
