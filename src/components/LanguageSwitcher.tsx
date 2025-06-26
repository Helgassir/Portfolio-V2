import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowDropdown(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors duration-200"
        aria-haspopup="true"
        aria-expanded={showDropdown}
        aria-label={t('language')}
      >
        <Languages size={18} />
        <span className="hidden sm:inline">{i18n.language.toUpperCase()}</span>
      </button>

      {showDropdown && (
        <div
          className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-50 overflow-hidden"
          role="menu"
        >
          <button
            onClick={() => changeLanguage('fr')}
            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
              i18n.language === 'fr'
                ? 'bg-primary-50 text-primary-700'
                : 'hover:bg-slate-50'
            }`}
            role="menuitem"
          >
            Français
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
              i18n.language === 'en'
                ? 'bg-primary-50 text-primary-700'
                : 'hover:bg-slate-50'
            }`}
            role="menuitem"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
