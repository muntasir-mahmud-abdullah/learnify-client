import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Languages from "./languages";

import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Statistics from "./Statistics";

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Languages></Languages>
      <Statistics></Statistics>
    <AboutUs></AboutUs>
    <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
