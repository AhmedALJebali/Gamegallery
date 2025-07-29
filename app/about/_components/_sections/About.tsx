import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white/30 text-white py-4 md:py-0  md:pt-20 px-4 md:px-6 my-10 md:my-20">
      <div className="max-w-7xl mx-auto flex flex-row items-center gap-6 md:gap-12">
        {/* Left Image */}
        <div className="w-[80%] md:w-1/2 relative aspect-[4/3]">
          <Image
            src="/Games/about.jpg"
            alt="KDA Hero"
            width={600}
            height={600}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Right Text */}
        <div className="w-1/2 md:py-20">
          <p className="uppercase text-[10px] md:text-sm text-gray-400 mb-1 md:mb-2">
            Lorem ipsum
          </p>
          <h2 className="text-base md:text-4xl font-bold mb-2 md:mb-4 leading-snug">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <p className="text-gray-300 text-xs md:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
