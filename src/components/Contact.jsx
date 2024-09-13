import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Contact = () => {
  const { language, toggleLanguage, translations } =
    useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="p-10 bg-purple-700 text-white dark:bg-black dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">{t.contactTitle}</h2>
      <p className="text-center mb-6">
        Got a question or proposal? Just want to say hello? Go ahead!
      </p>
      <p className="text-center">
        <a href="mailto:handetaskiranht@gmail.com">handetaskiranht@gmail.com</a>
      </p>
    </section>
  );
};

export default Contact;
