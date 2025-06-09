import React from "react";
import Banner from "./Banner";
import Languages from "./Languages";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Statistics from "./Statistics";
import HowItWorks from "./HowItWorks";
import Testomonial from "./Testomonial";

const Home = () => {
  return (
    <div className="bg-base-100">
      {/* Banner Section */}
      <Banner />

      {/* Languages Section */}
      <div className="py-8 bg-base-100">
        <Languages />
      </div>



      {/* Statistics Section */}
      <div className="py-16 bg-base-100">
        <Statistics />
      </div>

      {/* How it works section */}
          <div className="py-16 bg-base-100">
          <HowItWorks />
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-base-200">
        <AboutUs />
      </div>

      {/* testomonial section */}
      <div className="py-16 bg-base-200">
        <Testomonial />
      </div>
      {/* Contact Us Section */}
      <div className="py-16 bg-base-100">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
