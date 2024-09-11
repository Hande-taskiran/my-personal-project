import React from 'react';

const Projects = () => {
  return (
    <section className="p-10 bg-green-100 dark:bg-black dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-2">Workintech</h3>
          <p className="mb-4">A customizable minimal setup cookie plugin...</p>
          <div className="flex justify-between items-center">
            <span className="text-purple-700">React</span>
            <button className="px-4 py-2 bg-purple-700 text-white rounded-full">
              View Site
            </button>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-2">Journey</h3>
          <p className="mb-4">
            A simple, customizable setup for cookie plugins...
          </p>
          <div className="flex justify-between items-center">
            <span className="text-purple-700">React</span>
            <button className="px-4 py-2 bg-purple-700 text-white rounded-full">
              View Site
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
