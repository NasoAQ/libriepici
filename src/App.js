import { React, useState } from "react";
import MyNav from "./Components/Navbarra/MyNav";
import { myLinks, myLinksFoot } from "./data/navlinks";
import MyFooter from "./Components/Footbarra/MyFooter";
import Welcome from "./Components/Benvenuto/Welcome";
import LatestRelease from "./Components/Main/LatestRelease";
import ThemeContext from "./Components/Contexts/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = text => {
    setSearchText(text);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MyNav onSearchChange={handleSearchChange} links={myLinks} />
      <Welcome />
      <LatestRelease searchText={searchText} />
      <MyFooter links={myLinksFoot} />
    </ThemeContext.Provider>
  );
};

export default App;
