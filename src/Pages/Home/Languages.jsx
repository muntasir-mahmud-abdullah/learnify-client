import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LanguageCard from "./LanguageCard";

const Languages = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://learnify-server-blush.vercel.app/languages")
      .then((res) => res.json())
      .then((data) => {
        setLanguages(data);
      })
      .catch(() => {
        toast.error("Failed to load languages");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
<h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-4">
  Find Your Perfect Tutor
</h2>
<p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
  Browse our diverse language offerings and take your first lesson.
</p>


        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
          </div>
        ) : (
          /* Grid of Language Cards */
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {languages.map((language) => (
              <LanguageCard
                key={language._id}
                language={language}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Languages;
