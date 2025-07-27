"use client";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="w-[90%] sm:w-[80%] mx-auto mt-10 text-white">
      <div className="flex flex-col sm:w-[40%] w-full items-start z-2 relative">
        <span className="text-amber-600 font-black text-lg sm:text-xl">
          3D game Dev
        </span>

        <h1 className="text-3xl sm:text-5xl font-bold leading-snug sm:leading-[4rem]">
          Work that we produce for our clients
        </h1>

        <p className="font-light my-5 sm:my-8 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sequi
          perferendis, amet aut ipsam, libero sunt hic atque quaerat autem
          repudiandae explicabo corrupti quod exercitationem, itaque in
          recusandae nesciunt officiis!
        </p>

        <button className="bg-amber-500 px-4 sm:px-5 py-2 sm:py-3 rounded-4xl text-sm sm:text-lg font-medium">
          Get more details
        </button>
      </div>

      <motion.img
        src="/ui/joy_stick.svg"
        alt="Joystick"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: [-10, 10, -10] }} 
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 w-[80%] md:w-auto pointer-events-none z-0"
      />
    </section>
  );
};

export default Hero;
