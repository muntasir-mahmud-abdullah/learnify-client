import React, { useEffect, useState } from "react";
import BestTutorCard from "./BestTutorCard";
import UseAuth from "../../Hooks/UseAuth";

const BestTutors = () => {
  const { tutors, setTutors } = UseAuth();
  const [filteredTutors, setFilteredTutors] = useState([]); // Filtered tutors
  const [searchQuery, setSearchQuery] = useState(""); // Search query

  // Fetch all tutors
  useEffect(() => {
    fetch("http://localhost:5000/tutorials")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTutors(data);
        setFilteredTutors(data); // Initialize filtered tutors
      });
    // .catch(error=>Navigate('/signIn'))
  }, [setTutors]);

  // Filter tutors based on the search query
  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const matchedTutors = tutors.filter((tutor) =>
      tutor.language.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredTutors(matchedTutors);
  }, [searchQuery, tutors]);

  return (
    <div>
      <h1 className="text-3xl text-center mb-6">Best Tutors</h1>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by language..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>

      {/* Tutors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredTutors.map((tutor, index) => (
          <BestTutorCard key={index} tutor={tutor}></BestTutorCard>
        ))}
      </div>

      {/* No Results Message */}
      {filteredTutors.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No tutors match your search query.
        </p>
      )}
    </div>
  );
};

export default BestTutors;
