import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Profile = ({ profile }) => {
  //const profile = useSelector((state) => state.profile);
  const { language, toggleLanguage, translations } =
    useContext(LanguageContext);
  const t = translations[language];

  if (!profile || !profile.basicInfo) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-purple-700 dark:bg-black dark:text-white text-white p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">{t.profileTitle}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-4 bg-purple-500 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Basic Information</h3>
          <p>Doğum tarihi: {profile.basicInfo.birthdate}</p>
          <p>İkamet: {profile.basicInfo.location}</p>
          <p>Eğitim: {profile.basicInfo.education}</p>
        </div>
        <div className="p-4 bg-purple-500 rounded-lg">
          <h3 className="text-xl font-bold mb-2">About Me</h3>
          <p>{profile.aboutMe}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
