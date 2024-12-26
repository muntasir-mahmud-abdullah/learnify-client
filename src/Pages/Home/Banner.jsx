import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    arrows: false, // Disable previous and next arrows
  };

  return (
    <div className="relative w-full">
      {/* Banner/Carousel */}
      <Slider {...settings}>
        <div>
          <img
            src="https://via.placeholder.com/1500x600/ff7f7f/333333?text=Banner+Image+1"
            alt="Banner 1"
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1500x600/7f7fff/333333?text=Banner+Image+2"
            alt="Banner 2"
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1500x600/7fff7f/333333?text=Banner+Image+3"
            alt="Banner 3"
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          />
        </div>
      </Slider>

      {/* Optional Text Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h2 className="text-4xl font-bold mb-4 sm:text-5xl md:text-6xl">
          Welcome to Our Platform
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl">
          Discover and learn from top tutors around the world.
        </p>
      </div>
    </div>
  );
};

export default Banner;
