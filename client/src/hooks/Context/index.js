import React, { useState, createContext } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [searchWord, setSearchWord] = useState('');
  const [items, setItems] = useState(null);

  return (
    <StateContext.Provider value={{ searchWord, setSearchWord, items, setItems }}>
      {children}
    </StateContext.Provider>
  );
};