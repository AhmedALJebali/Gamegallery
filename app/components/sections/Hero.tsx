const Hero = () => {
  return (
    <section className="w-[80%] mx-auto mt-20 text-white ">
      <div className="flex flex-col  w-[40%] items-start">
        <span className="text-amber-600 font-black text-xl">3D game Dev</span>
        <h1 className="text-5xl font-bold leading-16">
          Work that we produce for our clients
        </h1>
        <p className="font-light my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sequi
          perferendis, amet aut ipsam, libero sunt hic atque quaerat autem
          repudiandae explicabo corrupti quod exercitationem, itaque in
          recusandae nesciunt officiis!
        </p>
        <button className="bg-amber-500 px-5 py-3 rounded-4xl text-lg font-medium ">
          Get more details
        </button>
      </div>
      <img src={"/ui/joy_stick.svg"} className="absolute right-0 top-0 pointer-events-none"/>
    </section>
  );
};

export default Hero;
