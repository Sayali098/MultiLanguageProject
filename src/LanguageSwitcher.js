import React from 'react';
import { useTranslation } from 'react-i18next';
import './Languageswitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='switcher'>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('hi')}>हिंदी</button>
      <button onClick={() => changeLanguage('mr')}>मराठी</button>
    </div>
  );
}

export default LanguageSwitcher;


