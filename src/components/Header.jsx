import React from 'react';

const Header = () => {
  return (
    <header className="bg-purple-700 text-white p-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4">Hande Taşkıran</h1>
      <h2 className="text-2xl mb-6">I am a Frontend Developer...</h2>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-white text-purple-700 rounded-full">
          Github
        </button>
        <button className="px-4 py-2 bg-white text-purple-700 rounded-full">
          LinkedIn
        </button>
      </div>
    </header>
  );
};

export default Header;
