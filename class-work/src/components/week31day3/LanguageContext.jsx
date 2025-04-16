import React, { createContext, useContext, useReducer } from 'react'

const initialState = { lang: 'en' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-lang':
      return { lang: action.payload };
    default:
      return state;
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <LanguageContext.Provider value={{ state, dispatch }}>
        {children}
      </LanguageContext.Provider>
    );
  }
  
  export function useLanguage() {
    return useContext(LanguageContext);
  }

