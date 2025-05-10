import React, { useEffect, useState } from "react";
import LanguageCard from "./LanguageCard";
import { toast } from "react-toastify";

const Languages = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://learnify-server-blush.vercel.app/languages")
      .then((res) => res.json())
      .then((data) => {
        setLanguages(data);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Error fetching languages:", error);
        toast.error("Error fetching languages")
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Explore Languages
        </h2>
        {loading ? (
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner text-primary"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {languages.map((language) => (
              <LanguageCard key={language._id} language={language} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Languages;
