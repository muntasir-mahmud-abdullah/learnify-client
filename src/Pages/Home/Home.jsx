import AboutPlatform from "./AboutPlatform";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import HowItWorksStudent from "./HowItWorksStudent";
import HowItWorksTutor from "./HowItWorksTutor";
import Languages from "./Languages";
import Statistics from "./Statistics";
import Testimonial from "./Testomonial";

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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <AboutPlatform />
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
          <HowItWorksStudent />
        </div>
      </section>
      {/* Divider */}
      <div className="h-1 bg-primary/20 dark:bg-primary/40 mx-auto max-w-2xl rounded-full"></div>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <HowItWorksTutor />
        </div>
      </section>
      {/* Divider */}
      <div className="h-1 bg-primary/20 dark:bg-primary/40 mx-auto max-w-2xl rounded-full"></div>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Testimonial />
        </div>
      </section>
    </div>
  );
};

export default Home;
