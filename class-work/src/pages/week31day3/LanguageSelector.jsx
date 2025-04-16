import React from 'react';
import { useLanguage } from '../../components/week31day3/LanguageContext';

export default function LanguageSelector() {
  const { state, dispatch } = useLanguage();

  const handleChange = (e) => {
    dispatch({ type: 'set-lang', payload: e.target.value });
  };

  return (
    <div>
      <select id="language" value={state.lang} onChange={handleChange}>
        <option value="ru">Русский</option>
        <option value="kz">Қазақша</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
