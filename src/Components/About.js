import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('page.data1')}</h1>
      <p>{t('page.msg')}</p>
    </div>
  );
}

export default About;