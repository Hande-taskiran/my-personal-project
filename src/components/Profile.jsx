import React from 'react';

const Profile = () => {
  return (
    <section className="bg-purple-700 dark:bg-black dark:text-white text-white p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Profile</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-4 bg-purple-500 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Basic Information</h3>
          <p>Doğum tarihi: 05.08.1990</p>
          <p>İkamet: Ankara</p>
          <p>Eğitim: Ankara Üniversitesi</p>
        </div>
        <div className="p-4 bg-purple-500 rounded-lg">
          <h3 className="text-xl font-bold mb-2">About Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam
            voluptatem nisi!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
