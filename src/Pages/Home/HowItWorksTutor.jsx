import React from "react";
import {
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Create Your Profile",
    desc: "Sign up and complete your bio with skills, expertise, and credentials.",
    icon: AcademicCapIcon,
  },
  {
    title: "2. List Tutorials",
    desc: "Add your lesson offerings with descriptions, pricing, and availability.",
    icon: ClipboardDocumentListIcon,
  },
  {
    title: "3. Manage Bookings",
    desc: "Receive student requests and confirm sessions via your dashboard.",
    icon: CalendarDaysIcon,
  },
  {
    title: "4. Earn & Grow",
    desc: "Conduct sessions, gather reviews, and grow your tutoring brand.",
    icon: StarIcon,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HowItWorksTutor = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="bg-base-100 py-16 dark:bg-gray-900"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          How It Works for Tutors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 dark:text-gray-300 text-lg"
        >
          Tutor Sheba makes it easy to build your tutoring career in 4 simple steps.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto mt-12 px-4">
        <div className="absolute left-5 top-0 h-full w-1 bg-primary rounded-full"></div>

        <div className="flex flex-col gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative pl-16"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute left-0 top-1 bg-primary text-white rounded-full p-2 shadow-md"
              >
                <step.icon className="h-6 w-6" />
              </motion.div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorksTutor;
