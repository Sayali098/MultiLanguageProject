import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* <h1>{t('home.title')}</h1>
    
      <p>{t('home.content')}</p>
      <p>{t('about.title')}</p>
      <p>{('language.title')}</p>
      <p>{t('how')}</p> */}
   
<img src="https://media.istockphoto.com/id/529664572/photo/fruit-background.jpg?s=612x612&w=0&k=20&c=K7V0rVCGj8tvluXDqxJgu0AdMKF8axP0A15P-8Ksh3I=" alt='img'></img>
   <h1>{t('page.title')}</h1>
      <p>{t('page.description')}</p>
      <h4>{t('page.data')}</h4>
      

      
    </div>
  );
}

export default Home;



//hi.json
// {
//     "home.title": "होम",
//     "about.title": "बारे में",
//     "language.select": "भाषा चुनें",
//     "language.english": "अंग्रेज़ी",
//     "language.hindi": "हिंदी"
//   }


//en.json
// {
//     "home.title": "Home",
//     "about.title": "About",
//     "language.select": "Select Language",
//     "language.english": "English",
//     "language.hindi": "हिंदी"
//   }




