import React from "react";
import MyNav from "../Components/Navbarra/MyNav";
import MyFooter from "../Components/Footbarra/MyFooter";
import { myLinks, myLinksFoot } from "../data/navlinks";

const MainLayout = ({ children }) => {
  return (
    <>
      <MyNav links={myLinks} />
      {children}
      <MyFooter links={myLinksFoot} />
    </>
  );
};

export default MainLayout;
