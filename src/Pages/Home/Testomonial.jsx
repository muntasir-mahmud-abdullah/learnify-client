// src/Components/Testimonial.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aisha Rahman",
    role: "Spanish Learner",
    avatar: "https://i.pravatar.cc/100?img=12",
    quote:
      "Learnify helped me finally feel confident speaking Spanish. My tutor María tailored each lesson to my interests—it’s been a game-changer!",
  },
  {
    name: "John Doe",
    role: "French Enthusiast",
    avatar: "https://i.pravatar.cc/100?img=32",
    quote:
      "I love the flexibility! I can book whenever I have time, and the video sessions feel just like being in a real classroom.",
  },
  {
    name: "Sara Lee",
    role: "Japanese Beginner",
    avatar: "https://i.pravatar.cc/100?img=5",
    quote:
      "My tutor Kenji was so patient. His real-world examples and homework assignments kept me motivated. Highly recommend!",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Testimonial = () => (
  <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={24}
    slidesPerView={1}
    pagination={{ clickable: true }}
    className="pb-16"
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    loop={true}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
    }}
  >
    {testimonials.map((t, idx) => (
      <SwiperSlide key={idx}>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow h-full flex flex-col"
        >
          <div className="flex items-center mb-4">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.role}
              </p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 flex-1">
            “{t.quote}”
          </p>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Testimonial;
