import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute bottom-8 w-full flex justify-center">
        <ul className="flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-700"></button>
    ),
  };

  const slides = [
    "https://i.ibb.co/bRv8k53w/woman-hand-picking-book-from-bookshelf-library-university-college-high-school-bookshop-1048944-21899.jpg",
    "https://i.ibb.co/v6D1JhJz/graduation-attire.jpg",
    "https://i.ibb.co/vvXX1XKK/empty-chairs.jpg",
  ];

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {slides.map((src, idx) => (
          <div key={idx} className="relative">
            {/* Background Image */}
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent dark:from-black/70 dark:via-black/50"></div>
          </div>
        ))}
      </Slider>

      {/* Text & CTA Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          Welcome to Learnify
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl drop-shadow"
        >
          Discover and learn from top tutors around the world—anytime, anywhere.
        </motion.p>
        <Link to="/findTutors" className="mt-8">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            Join Now
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
