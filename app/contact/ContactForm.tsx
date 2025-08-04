const ContactForm = () => {
  return (
    <section className=" bg-[#120A05] text-white px-4 py-20 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 z-10 relative">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Say hello</h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>

      {/* Form */}
      <form className="max-w-4xl mx-auto space-y-6 z-10 relative">
        {/* First Row */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 p-3 bg-[#1E1410] border border-gray-600 rounded-md text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 p-3 bg-[#1E1410] border border-gray-600 rounded-md text-white placeholder-gray-400"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 bg-[#1E1410] border border-gray-600 rounded-md text-white placeholder-gray-400"
        />

        {/* Message */}
        <textarea
          rows={9}
          placeholder="Message"
          className="w-full p-3 bg-[#1E1410] border border-gray-600 rounded-md text-white placeholder-gray-400"
        ></textarea>

        {/* Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition duration-200 text-lg"
          >
            Get in touch
          </button>
        </div>
      </form>

      {/* Decorative curves — if you want to include actual SVGs later */}
      {/* <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30"> */}
      {/* SVG or background pattern can go here */}
      {/* </div> */}
    </section>
  );
};

export default ContactForm;
