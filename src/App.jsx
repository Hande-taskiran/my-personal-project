import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Contact />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
