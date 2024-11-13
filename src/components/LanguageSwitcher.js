// src/components/LanguageSwitcher.js
import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className="flex items-center space-x-1"
      >
        <img
          src="/flags/en.png"
          alt="English"
          className="w-6 h-6 rounded-full"
        />
        <span className="text-sm font-medium">EN</span>
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className="flex items-center space-x-1"
      >
        <img
          src="/flags/es.png"
          alt="Español"
          className="w-6 h-6 rounded-full"
        />
        <span className="text-sm font-medium">ES</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
