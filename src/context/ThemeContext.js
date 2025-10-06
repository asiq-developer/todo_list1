import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState(() => {
    return localStorage.getItem('color') || 'light';
  });

  const toggleTheme = () => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
    localStorage.setItem('color', updatedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
