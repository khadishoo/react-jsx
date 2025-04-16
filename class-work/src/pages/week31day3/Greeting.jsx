import React from 'react';
import { useLanguage } from '../../components/week31day3/LanguageContext';

const texts = {
  ru: 'Привет!',
  kz: 'Сaлем!',
  en: 'Hello!',
};

export default function Greeting() {
  const { state } = useLanguage();

  return (
    <div>
      <h1>{texts[state.lang]}</h1>
    </div>
  );
}