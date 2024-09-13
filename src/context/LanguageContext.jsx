import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'tr' : 'en'));
  };

  const translations = {
    en: {
      title: 'Hande Taşkıran',
      description: 'I am a Frontend Developer...',
      skillsTitle: 'Skills',
      profileTitle: 'Profile',
      projectsTitle: 'Projects',
      contactTitle: 'Send me a message!',
      github: 'Github',
      linkedin: 'LinkedIn',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      switchLanguage: 'Türkçeye geç',
    },
    tr: {
      title: 'Hande Taşkıran',
      description: "Ben bir Frontend Developer'ım...",
      skillsTitle: 'Yetenekler',
      profileTitle: 'Profil',
      projectsTitle: 'Projeler',
      contactTitle: 'Bana mesaj gönder!',
      github: 'Github',
      linkedin: 'LinkedIn',
      darkMode: 'Koyu Mod',
      lightMode: 'Açık Mod',
      switchLanguage: 'Switch to English',
    },
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
