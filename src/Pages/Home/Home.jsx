import React from "react";
import Banner from "./Banner";
import Languages from "./Languages";
import Statistics from "./Statistics";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import Testimonial from "./Testomonial";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors">

      {/* Banner */}
      <section className="relative">
        <Banner />
      </section>

      {/* Explore Languages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Languages />
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-primary/20 dark:bg-primary/40 mx-auto max-w-2xl rounded-full"></div>

      {/* Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Statistics />
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-primary/20 dark:bg-primary/40 mx-auto max-w-2xl rounded-full"></div>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <HowItWorks />
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-primary/20 dark:bg-primary/40 mx-auto max-w-2xl rounded-full"></div>

      {/* About Us */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-5xl mx-auto px-4">
          <AboutUs />
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-primary/20 dark:bg-primary/40 mx-auto max-w-2xl rounded-full"></div>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-8">
            What Our Learners Say
          </h2>
          <Testimonial />
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-primary/20 dark:bg-primary/40 mx-auto max-w-2xl rounded-full"></div>

      {/* Contact Us */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4">
          <ContactUs />
        </div>
      </section>

    </div>
  );
};

export default Home;
