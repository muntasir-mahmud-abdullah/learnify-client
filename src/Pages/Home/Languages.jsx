// src/Components/Languages.jsx
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LanguageCard from "./LanguageCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Languages = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://learnify-server-blush.vercel.app/languages")
      .then((res) => res.json())
      .then((data) => setLanguages(data))
      .catch(() => toast.error("Failed to load languages"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-gray-900 dark:text-gray-100"
        >
          Find Your Perfect Tutor
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300"
        >
          Browse our diverse language offerings and take your first lesson.
        </motion.p>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary" />
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {languages.map((language) => (
            <motion.div key={language._id} variants={itemVariants}>
              <LanguageCard language={language} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Languages;
