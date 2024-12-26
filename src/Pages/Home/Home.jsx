import React from "react";
import Banner from "./Banner";
import Languages from "./Languages";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Statistics from "./Statistics";

const Home = () => {
  return (
    <div className="bg-base-100">
      {/* Banner Section */}
      <Banner />

      {/* Languages Section */}
      <div className="py-16 bg-base-200">
        <Languages />
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-base-100">
        <Statistics />
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-base-200">
        <AboutUs />
      </div>

      {/* Contact Us Section */}
      <div className="py-16 bg-base-100">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
