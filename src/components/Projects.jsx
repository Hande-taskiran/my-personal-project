import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Projects = ({ projects }) => {
  //const projects = useSelector((state) => state.projects);
  const { language, toggleLanguage, translations } =
    useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="p-10 bg-green-100 dark:bg-black dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">{t.projectsTitle}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            className="p-6 bg-white rounded-lg shadow-md"
            key={project.title}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-purple-700">{project.tech}</span>
              <button className="px-4 py-2 bg-purple-700 text-white rounded-full">
                View Site
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
