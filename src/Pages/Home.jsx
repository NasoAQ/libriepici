import React from "react";
import MainLayout from "../Layouts/MainLayout";
import ThemeContext from "../Components/Contexts/ThemeContext";
import MyContext from "../Components/Contexts/provaContext";
import LatestRelease from "../Components/Main/LatestRelease";
import Welcome from "../Components/Benvenuto/Welcome";

const Home = () => {
  return (
    <ThemeContext>
      <MyContext>
        <MainLayout>
          <Welcome />
          <LatestRelease />
        </MainLayout>
      </MyContext>
    </ThemeContext>
  );
};

export default Home;
