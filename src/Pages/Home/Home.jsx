import React from "react";
import Banner from "./Banner";
import Languages from "./languages";
import BestTutors from "../Tutors/BestTutors";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Languages></Languages>
      <BestTutors></BestTutors>
    </div>
  );
};

export default Home;
