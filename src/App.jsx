import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import { LanguageProvider } from './context/LanguageContext';
import data from './data/data';
import Contact from './components/Contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { skills, profile, projects } = data;

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <Provider store={store}>
      <LanguageProvider>
        <div className="App">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Skills skills={skills} />
          <Profile profile={profile} />
          <Projects projects={projects} />
          <Contact />
        </div>
      </LanguageProvider>
    </Provider>
  );
};

export default App;
