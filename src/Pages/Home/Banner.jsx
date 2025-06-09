import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
            alt="banner-image1"
            src="https://i.ibb.co.com/bRv8k53w/woman-hand-picking-book-from-bookshelf-library-university-college-high-school-bookshop-1048944-21899.jpg"
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover opacity-50"
          />
        </div>
        <div>
          <img
            alt="banner-image2"
            src="https://i.ibb.co.com/v6D1JhJz/graduation-attire-displayed-college-campus-60438-3682.jpg"
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover opacity-50"
          />
        </div>
        <div>
          <img
            alt="banner-image3"
            src="https://i.ibb.co.com/vvXX1XKK/empty-chairs-tables-row-1048944-19298211.jpg"
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover opacity-50"
          />
        </div>
      </Slider>

      {/* Optional Text Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-4xl font-bold mb-4 sm:text-5xl md:text-6xl">
          Welcome to Our Platform
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl">
          Discover and learn from top tutors around the world.
        </p>
        <button>
          <Link to="/findTutors">
            <div className="btn  btn-success btn-md sm:btn-lg mt-10 text-lg sm:text-xl font-semibold">Join Now</div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
