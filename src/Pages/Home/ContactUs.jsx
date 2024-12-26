const ContactUs = () => {
  return (
    <div className="flex justify-center items-center p-16 bg-base-200">
      <div className="max-w-4xl text-center p-8 rounded-lg shadow-md bg-white">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">
          Have any questions or need assistance? Reach out to us using the
          details below, and we’ll get back to you as soon as possible.
        </p>
        <div className="space-y-4 text-lg">
          <div>
            <strong>Email:</strong> support@tutorplatform.com
          </div>
          <div>
            <strong>Phone:</strong> +1 234 567 890
          </div>
          <div>
            <strong>Address:</strong> 123 Tutor Lane, Learning City, EduLand
          </div>
        </div>
        <p className="text-lg mt-6">
          We value your feedback and suggestions. Let us know how we can improve
          to serve you better!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
