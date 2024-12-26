import React, { useEffect, useState } from "react";
import LanguageCard from "./LanguageCard";

const Languages = () => {
  const [languages, setlanguages] = useState([]);
  useEffect(() => {
    fetch("https://learnify-server-blush.vercel.app/languages")
      .then((res) => res.json())
      .then((data) => setlanguages(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {languages.map((language) => (
          <LanguageCard key={language._id} language={language}></LanguageCard>
        ))}
      </div>
    </div>
  );
};

export default Languages;
