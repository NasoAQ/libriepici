import React from "react";
import MyNav from "../Components/Navbarra/MyNav";
import MyFooter from "../Components/Footbarra/MyFooter";

const MainLayout = ({ children }) => {
  return (
    <>
      <MyNav />
      {children}
      <MyFooter />
    </>
  );
};

export default MainLayout;
