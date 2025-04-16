import React, { createContext, useReducer, useContext } from 'react';

const MessageContext = createContext();

const initialState = {
  message: '',
  type: '', 
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'success':
      return { message: '✅ Сәтті!', type: 'success' };
    case 'error':
      return { message: '❌ Қате!', type: 'error' };
    case 'clear':
      return { message: '', type: '' };
    default:
      return state;
  }
};

export function MessageProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MessageContext.Provider value={{ state, dispatch }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  return useContext(MessageContext);
}