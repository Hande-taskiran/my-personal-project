import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-purple-700 dark:bg-black text-white dark:text-white p-10 flex flex-col items-center">
      <div className="flex items-center ml-auto gap-4">
        <button className="px-4 py-2 bg-purple-700 text-white rounded-full">
          Türkçeye Geç
        </button>
        <Form className="flex items-center gap-2">
          <FormGroup switch>
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            <Input
              type="switch"
              role="switch"
              id="darkModeSwitch"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </FormGroup>
        </Form>
      </div>
      <div className="flex flex-col items-center mr-auto ">
        <p className="text-1xl font-bold mb-4">Hande Taşkıran</p>
        <p className="text-2xl mb-6">I am a Frontend Developer...</p>
        <p>
          ...who likes to craft solid and scalable frontend products with great
          user experiences.
        </p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white text-purple-700">Github</button>
          <button className="px-4 py-2 bg-white text-purple-700">
            LinkedIn
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
