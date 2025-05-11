const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "📋",
              title: "Browse Tutors",
              desc: "Explore tutors by language, price, and reviews.",
            },
            {
              icon: "📅",
              title: "My Tutors",
              desc: "Find the tutors, already booked by you and start learning.",
            },
            {
              icon: "🖋️",
              title: "Add Your Lessons",
              desc: "You can also upload your tutorials and see or update them easily.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 border rounded-lg hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
