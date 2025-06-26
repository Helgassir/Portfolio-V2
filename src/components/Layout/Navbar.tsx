import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Download } from 'lucide-react'; // <-- ajout de l'icône
import LanguageSwitcher from '../LanguageSwitcher';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), id: 'hero', path: '#hero' },
    { name: t('nav.projects'), path: '#projects' },
    { name: t('nav.about'), path: '#about' },
    { name: t('nav.contact'), path: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 object-cover rounded-full"
              loading="lazy"
            />
            <span className="font-semibold text-xl">Hajar El-Gassir</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.path || link.id}
                  href={link.path}
                  className="font-medium text-slate-700 hover:text-primary-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Bouton Télécharger le CV (desktop) */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg shadow hover:bg-primary-700 transition flex items-center gap-2"
            >
              <Download className="w-5 h-5 text-white" />
              {t('Mon cv') ?? 'CV'}
            </a>

            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.path || link.id}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="py-2 font-medium text-slate-700 hover:text-primary-600"
              >
                {link.name}
              </a>
            ))}

            {/* Bouton Télécharger le CV (mobile) */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-center shadow hover:bg-primary-700 transition flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5 text-white" />
              {t('Mon cv') ?? 'CV'}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
