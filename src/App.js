import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Routing from './Routing';
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';

function App() {
  return (
    <Router>
      <nav>
        <a href='/'>home</a>
        <a href='/about'>about</a>
      </nav>
      <I18nextProvider i18n={i18n}>
        <div>
          <LanguageSwitcher />
          <Routing />
        </div>
      </I18nextProvider>
    </Router>
  );
}

export default App;
