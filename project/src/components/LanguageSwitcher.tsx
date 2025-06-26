import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (showDropdown) setShowDropdown(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showDropdown]);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowDropdown(false);
  };
  
  return (
    <div className="relative">
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setShowDropdown(!showDropdown);
        }}
        className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors duration-200"
        aria-label={t('language')}
      >
        <Languages size={18} />
        <span className="hidden sm:inline">{i18n.language === 'fr' ? 'FR' : 'EN'}</span>
      </button>
      
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-50 overflow-hidden">
          <button
            onClick={() => changeLanguage('fr')}
            className={`w-full text-left px-4 py-2 text-sm ${i18n.language === 'fr' ? 'bg-primary-50 text-primary-700' : 'hover:bg-slate-50'}`}
          >
            Français
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full text-left px-4 py-2 text-sm ${i18n.language === 'en' ? 'bg-primary-50 text-primary-700' : 'hover:bg-slate-50'}`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}