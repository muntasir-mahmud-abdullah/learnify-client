const Testomonial = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-500">
      <div className="container mx-auto">
        <h2 className="text-4xl dark:text-[#1d232a] font-bold text-center mb-8">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Learnify helped me improve my French in just weeks!",
              name: "– Sarah L.",
            },
            {
              quote: "The tutors are professional and very patient.",
              name: "– Raj P.",
            },
            {
              quote: "Booking was seamless and secure. Highly recommend!",
              name: "– Emily R.",
            },
          ].map((t, i) => (
            <div key={i} className="p-6 bg-gray-300 rounded-lg shadow">
              <p className="italic mb-4 dark:text-[#1d232a]">"{t.quote}"</p>
              <p className="font-semibold dark:text-[#1d232a]">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testomonial;
