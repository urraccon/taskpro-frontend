import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({value:"light"});
  useEffect(() => {
    if (theme.value === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    if (theme.value === 'violet') document.body.classList.add('violet');
    else document.body.classList.remove('violet');
    if (theme.value === 'light') document.body.classList.add('light');
    else document.body.classList.remove('light');
  }, [theme]);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
