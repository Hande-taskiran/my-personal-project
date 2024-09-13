import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Skills = ({ skills }) => {
  //const skills = useSelector((state) => state.skills);
  const { language, toggleLanguage, translations } =
    useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="p-10 dark:bg-black dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">{t.skillsTitle}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        {skills.map((skill) => (
          <div className="text-center" key={skill.name}>
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mx-auto"
            />
            <p>{skill.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
