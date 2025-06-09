import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  UserGroupIcon,
  AcademicCapIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const BASE_URL = "https://learnify-server-blush.vercel.app";

const statsConfig = [
  {
    label: "Total Tutors",
    icon: AcademicCapIcon,
    key: "tutorsCount",
    endpoint: "/tutors/count",
    bgColor: "bg-indigo-500",
  },
  {
    label: "Total Reviews",
    icon: ChatBubbleBottomCenterTextIcon,
    key: "totalReviews",
    endpoint: "/reviews/count",
    bgColor: "bg-green-500",
  },
  {
    label: "Total Languages",
    icon: GlobeAltIcon,
    key: "languageCount",
    endpoint: null,          // static
    bgColor: "bg-yellow-500",
  },
  {
    label: "Registered Users",
    icon: UserGroupIcon,
    key: "userCount",
    endpoint: "/users/count",
    bgColor: "bg-pink-500",
  },
];

const Statistics = () => {
  const [stats, setStats] = useState({
    tutorsCount: 0,
    totalReviews: 0,
    languageCount: 9,
    userCount: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const results = await Promise.all(
          statsConfig.map(async (cfg) => {
            if (!cfg.endpoint) {
              return { key: cfg.key, value: stats[cfg.key] };
            }
            const res = await fetch(BASE_URL + cfg.endpoint);
            if (!res.ok) {
              console.error(`Failed ${cfg.endpoint}:`, res.status, await res.text());
              throw new Error(`Error ${res.status}`);
            }
            const json = await res.json();
            const value = json.count ?? json.totalReviews;
            return { key: cfg.key, value };
          })
        );
        setStats((prev) => {
          const updated = { ...prev };
          results.forEach(({ key, value }) => (updated[key] = value));
          return updated;
        });
      } catch (err) {
        console.error("Error fetching statistics:", err);
        toast.error("Error fetching statistics. Check console.");
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          Platform Statistics
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Track our growth and community engagement at a glance.
        </p>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {statsConfig.map(({ label, icon: Icon, key, bgColor }) => (
              <div
                key={key}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className={`${bgColor} p-3 rounded-full mb-4 text-white`}>
                  <Icon className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {label}
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {stats[key]}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Statistics;
