import React from "react";
import MyNav from "./Components/Navbarra/MyNav";
import { myLinks, myLinksFoot } from "./data/navlinks";
import MyFooter from "./Components/Footbarra/MyFooter";
import Welcome from "./Components/Benvenuto/Welcome";
import LatestRelease from "./Components/Main/LatestRelease";
import ThemeContext from "./Components/Contexts/ThemeContext";
import MyContext from "./Components/Contexts/provaContext";

const App = () => {
  return (
    <ThemeContext>
      <MyContext>
        <MyNav links={myLinks} />
        <Welcome />
        <LatestRelease />
      </MyContext>
      <MyFooter links={myLinksFoot} />
    </ThemeContext>
  );
};

export default App;
