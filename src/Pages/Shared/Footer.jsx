const Footer = () => {
  return (
    <footer className="bg-base-200 p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-primary">Learnify</h2>
          <p className="text-base-content mt-2">
            Connecting learners with the best tutors worldwide. Empowering
            education for everyone.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="link link-hover">
                Home
              </a>
            </li>
            <li>
              <a href="/findTutors" className="link link-hover">
                Find Tutors
              </a>
            </li>
            <li>
              <a href="/addTutorial" className="link link-hover">
                Add Tutorials
              </a>
            </li>
            <li>
              <a href="/myTutorial" className="link link-hover">
                My Tutorials
              </a>
            </li>
            <li>
              <a href="/myBookedTutors" className="link link-hover">
                My Booked Tutors
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="mailto:support@learnify.com" className="link link-hover">
                support@learnify.com
              </a>
            </li>
            <li>
              <a href="tel:+123456789" className="link link-hover">
                +1 (234) 567-89
              </a>
            </li>
            <li>123 Tutor Lane, Education City</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-base-300 mt-8 pt-4 text-center">
        <p className="text-sm text-base-content">
          © {new Date().getFullYear()} Learnify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
