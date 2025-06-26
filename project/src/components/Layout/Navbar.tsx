import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Code } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing pages
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];
  
  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-600 text-white">
              <Code size={20} />
            </div>
            <span className="font-semibold text-xl">Hajar El-Gassir</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium ${
                    isActivePath(link.path)
                      ? 'text-primary-700'
                      : 'text-slate-700 hover:text-primary-600'
                  } transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
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
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 font-medium ${
                  isActivePath(link.path)
                    ? 'text-primary-700'
                    : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}