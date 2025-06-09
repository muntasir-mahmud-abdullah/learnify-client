import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Statistics = () => {
  const [userCount, setUserCount] = useState(0);
  const [tutorsCount, setTutorsCount] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const languageCount = 9; // Hardcoded language count for now
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://learnify-server-blush.vercel.app/reviews/count")
        .then((res) => res.json())
        .then((data) => setTotalReviews(data.totalReviews)),
      fetch("https://learnify-server-blush.vercel.app/users/count")
        .then((res) => res.json())
        .then((data) => setUserCount(data.count)),
      fetch("https://learnify-server-blush.vercel.app/tutors/count")
        .then((res) => res.json())
        .then((data) => setTutorsCount(data.count)),
    ])
      .then(() => setLoading(false))
      .catch((error) => {
        // console.error("Error fetching statistics:", error);
        toast.error("Error fetching statistics");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Statistics Overview
      </h2>

      {/* Loading Spinner */}
      {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
          </div>
      ) : (
        // Stats Cards Container
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Tutors Count Card */}
          <div className="bg-white dark:bg-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center border border-gray-200">
            <p className="text-lg font-semibold text-gray-600 dark:text-[#1d232a]">Total Tutors</p>
            <p className="text-4xl font-bold text-primary mt-2">
              {tutorsCount}
            </p>
          </div>

          {/* Reviews Count Card */}
          <div className="bg-white dark:bg-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center border border-gray-200">
            <p className="text-lg font-semibold text-gray-600 dark:text-[#1d232a]">Total Reviews</p>
            <p className="text-4xl font-bold text-primary mt-2">
              {totalReviews}
            </p>
          </div>

          {/* Languages Count Card */}
          <div className="bg-white dark:bg-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center border border-gray-200">
            <p className="text-lg font-semibold text-gray-600 dark:text-[#1d232a]">
              Total Languages
            </p>
            <p className="text-4xl font-bold text-primary mt-2">
              {languageCount}
            </p>
          </div>

          {/* Users Count Card */}
          <div className="bg-white dark:bg-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center border border-gray-200">
            <p className="text-lg font-semibold text-gray-600 dark:text-[#1d232a]">
              Total Registered Users
            </p>
            <p className="text-4xl font-bold text-primary mt-2">{userCount}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
