import React from 'react';

const Skills = () => {
  return (
    <section className="p-10 dark:bg-black dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        <div className="text-center">
          <img
            src="./assets/js_logo.png"
            alt="JavaScript"
            className="w-16 h-16 mx-auto"
          />
          <p>JAVASCRİPT</p>
        </div>
        <div className="text-center">
          <img
            src="./assets/react_icon.ico"
            alt="React"
            className="w-16 h-16 mx-auto"
          />
          <p>REACT</p>
        </div>
        <div className="text-center">
          <img
            src="./assets/redux_icon.ico"
            alt="Redux"
            className="w-16 h-16 mx-auto"
          />
          <p>REDUX</p>
        </div>
        <div className="text-center">
          <img
            src="./assets/node_icon.ico"
            alt="Node"
            className="w-16 h-16 mx-auto"
          />
          <p>NODE</p>
        </div>
        <div className="text-center">
          <img
            src="./assets/vscode_icon.ico"
            alt="VScode"
            className="w-16 h-16 mx-auto"
          />
          <p>VS CODE</p>
        </div>
        <div className="text-center">
          <img
            src="./assets/figma_logo_icon.png"
            alt="Figma"
            className="w-16 h-16 mx-auto"
          />
          <p>FİGMA</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
