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
            src="https://i.ibb.co.com/hHr0B6Y/high-angle-gaming-setup-indoors-23-2149829123.jpg"
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/sKcySMf/workspace-with-blank-computer-screen-autumn-decoration-workspace-with-computer-58797-1195.jpg"
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/ChbBVjN/halfclosed-laptop-wooden-table-screen-glows-with-colors-169016-33669.jpg"
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
