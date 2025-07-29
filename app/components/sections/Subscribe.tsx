const SubscribeSection = () => {
  return (
    <section className="text-white  py-12 px-6 my-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Lorem Ipsum</h2>
          <p className="text-sm sm:text-base text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Subscribe Box */}
        <div className="bg-white/30 rounded-xl p-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left Text */}
          <div>
            <h3 className="text-xl font-semibold mb-1">Stay in the loop</h3>
            <p className="text-sm text-gray-300">
              Subscribe to receive the latest news and updates about TDA.
              <br /> We promise not to spam you!
            </p>
          </div>

          {/* Input + Button */}
          <div className="flex items-center w-full max-w-md">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 py-2 px-4 rounded-l-md outline-none text-black bg-white"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-5 py-2 rounded-r-md">
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
