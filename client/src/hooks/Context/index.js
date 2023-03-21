import React, { useState, createContext } from 'react';

// Create a context for the state
export const StateContext = createContext();

// Create a provider for the state
export const StateProvider = ({ children }) => {
  // Congratulations 
  const [searchWord, setSearchWord] = useState('');
  const [items, setItems] = useState(null);

  return (
    <StateContext.Provider value={{ searchWord, setSearchWord, items, setItems }}>
      {children}
    </StateContext.Provider>
  );
};