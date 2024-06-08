import { useState, useCallback, useEffect } from 'react';
import i18n from "i18next";

export function ucI18n() {
    const [language, setLanguage] = useState(i18n.language);
    const lang = ["es", "en"];
    useEffect(() => {
      const handleStorageChange = () => {
        const lang = localStorage.getItem("language");
        if (lang && lang !== language) {
          setLanguage(lang);
          i18n.changeLanguage(lang);
        }
      };
  
      window.addEventListener('storage', handleStorageChange);
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, [language]);
  
    const handleLanguage = useCallback((lang: string) => {
      localStorage.setItem("language", lang);
      setLanguage(lang);
      i18n.changeLanguage(lang);
    }, [language]);
  
    return { handleLanguage, language,lang };
  }