// src/Components/HowItWorksStudent.jsx
import React from "react";

const steps = [
  {
    title: "Find Your Language",
    desc: "Search or browse categories to discover tutors for over 10 languages.",
  },
  {
    title: "Compare Tutors",
    desc: "Review profiles, watch intro videos, and read real student feedback.",
  },
  {
    title: "Book Your Session",
    desc: "Pick a date & time, confirm your slot, and receive instant reminders.",
  },
  {
    title: "Start Learning",
    desc: "Join your live video lesson, practice interactively, and track progress.",
  },
];

const HowItWorksStudent = () => (
  <section className="py-16 bg-base-100 dark:bg-gray-900 transition-colors">
    <div className="max-w-5xl mx-auto px-4 text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
        How It Works &mdash; Students
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        A simple 4-step journey from discovery to fluency.
      </p>
    </div>

    <div className="relative max-w-4xl mx-auto px-4">
      {/* Center spine */}
      <div className="absolute left-1/2 transform -translate-x-1 w-1 bg-primary h-full"></div>

      {steps.map((step, idx) => {
        const isEven = idx % 2 === 1;
        return (
          <div
            key={idx}
            className={`mb-12 flex w-full items-center ${
              isEven ? "justify-end" : "justify-start"
            }`}
          >
            <div className={`w-5/12 ${isEven ? "order-2" : ""}`}></div>

            {/* Step Marker */}
            <div className="z-10">
              <div className="flex flex-col items-center">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-lg font-bold">
                  {idx + 1}
                </span>
                {/* Connector dot */}
                <div className="w-1 h-4 bg-primary" />
              </div>
            </div>

            {/* Card */}
            <div
              className={`w-5/12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
                isEven ? "ml-8 text-right" : "mr-8 text-left"
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default HowItWorksStudent;
