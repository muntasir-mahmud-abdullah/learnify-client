import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import BestTutorCard from "./BestTutorCard";

const BestTutors = () => {
  const { tutors, setTutors } = UseAuth();
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all tutors
  useEffect(() => {
    fetch("https://learnify-server-blush.vercel.app/tutorials")
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setFilteredTutors(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load tutors");
      });
  }, [setTutors]);

  // Search filter
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const results = tutors.filter((tutor) =>
      tutor.language.toLowerCase().includes(query)
    );
    setFilteredTutors(results);
  }, [searchQuery, tutors]);

  return (
    <section className="py-16 bg-base-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Top Rated Tutors
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">
            Explore highly rated tutors ready to help you succeed.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by language..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-full max-w-md text-sm dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <>
            {filteredTutors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTutors.map((tutor, index) => (
                  <BestTutorCard key={index} tutor={tutor} />
                ))}
              </div>
            ) : (
              <div className="text-center mt-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No tutors found matching your search.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BestTutors;
