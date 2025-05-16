const HowItWorks = () => {
  return (
<section
  id="how-it-works"
  className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
>
  <div className="container mx-auto text-center px-4">
    <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
      How It Works
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: '📋', title: 'Browse Tutors', desc: 'Explore tutors by language, price, and ratings.' },
        { icon: '📅', title: 'Book a Session', desc: 'Select your date and time and confirm securely.' },
        { icon: '💬', title: 'Start Learning', desc: 'Join your tutor’s virtual classroom and begin.' }
      ].map((step, i) => (
        <div
          key={i}
          className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-200 dark:bg-gray-800"
        >
          <div className="text-5xl mb-4">{step.icon}</div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            {step.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default HowItWorks;
