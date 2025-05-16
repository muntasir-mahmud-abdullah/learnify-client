const ContactUs = () => {
  return (
    <div className="flex justify-center items-center py-16 bg-base-200">
      <div className="max-w-3xl w-full p-8 rounded-lg shadow-lg bg-white dark:bg-gray-300">
        <h2 className="text-4xl font-bold text-center mb-6 text-primary">Contact Us</h2>
        <p className="text-lg text-center mb-8 text-gray-700">
          Have any questions or need assistance? Reach out to us using the
          details below, and we’ll get back to you as soon as possible.
        </p>
        <div className="space-y-4 text-lg text-gray-800">
          <div>
            <strong>Email:</strong> <a href="mailto:support@tutorplatform.com" className="text-primary hover:underline">support@tutorplatform.com</a>
          </div>
          <div>
            <strong>Phone:</strong> <a href="tel:+1234567890" className="text-primary hover:underline">+1 234 567 890</a>
          </div>
          <div>
            <strong>Address:</strong> 123 Tutor Lane, Learning City, EduLand
          </div>
        </div>
        <p className="text-lg mt-6 text-center text-gray-700">
          We value your feedback and suggestions. Let us know how we can improve
          to serve you better!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
