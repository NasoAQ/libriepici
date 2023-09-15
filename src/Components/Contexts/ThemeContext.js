import { createContext, useState } from "react";

export const ThemeProvider = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeProvider.Provider>
  );
};

export default ThemeContext;
