import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="relative bg-blue-700 dark:bg-black text-white dark:text-white p-10 flex items-center justify-between h-62">
      <div className="flex flex-col items-start text-green-300 z-10 self-start pl-14">
        <p className="text-1xl font-bold mb-6">Hande Taşkıran</p>
        <p className="text-2xl mb-6">I am a Frontend Developer...</p>
        <p className="text-white mb-4 text-left max-w-md w-auto">
          ...who likes to craft solid and scalable frontend products with great
          user experiences.
        </p>

        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white text-blue-700">Github</button>
          <button className="px-4 py-2 bg-white text-blue-700">LinkedIn</button>
        </div>
      </div>

      <div className="absolute top-0 right-1/3 p-4 z-10">
        <button className="px-4 py-2 bg-blue-700 text-green-300 rounded-full">
          Türkçeye Geç
        </button>
      </div>

      <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-r from-green-300 to-green-500 z-0"></div>

      <div className="absolute top-0 right-0 p-4 z-10">
        <Form className="flex items-center">
          <FormGroup switch>
            <span className="mr-2">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
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
    </header>
  );
};

export default Header;
