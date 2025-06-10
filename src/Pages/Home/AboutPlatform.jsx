// src/Components/AboutPlatform.jsx
import React from "react";
import { AcademicCapIcon, GlobeAltIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    icon: AcademicCapIcon,
    title: "Expert Tutors",
    desc: "Hand-picked language tutors with verified credentials and real-world experience."
  },
  {
    icon: GlobeAltIcon,
    title: "Global Reach",
    desc: "Connect with native speakers and learners around the world—anytime, anywhere."
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Engaging Lessons",
    desc: "Interactive lessons, real-time feedback, and personalized learning paths."
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutPlatform = () => (
  <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
    <div className="max-w-5xl mx-auto px-4 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4"
      >
        About Learnify
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-600 dark:text-gray-300 mb-12"
      >
        Learnify is a modern online tutor booking platform designed for language learners of all levels.  
        Connect with the perfect tutor and achieve your goals with engaging, personalized lessons.
      </motion.p>

      {/* Feature Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      >
        {features.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition-shadow"
          >
            <div className="p-3 bg-primary text-white rounded-full mb-4">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutPlatform;
