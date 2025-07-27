"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const GameOfTheweek = () => {
  return (
    <section className="w-full max-w-screen-xl px-4 mx-auto">
      <h1 className="leading-tight text-center text-white text-3xl md:text-5xl font-bold">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </h1>

      <div className="mt-16 text-white">
        <h2 className="text-2xl md:text-4xl font-normal">Lorem Ipsum</h2>
        <p className="text-white/90 mt-6 md:mt-10 w-full md:w-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
      </div>

      <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] my-16">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-10"
        >
          <Image
            src="/Games/GameofTheweek.png"
            fill
            alt="spiderman"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute left-[70%] top-[50%] -translate-y-1/2 -translate-x-1/2 hidden md:block"
        >
          <Image src="/ui/grid.svg" width={180} height={180} alt="grid" />
        </motion.div>
      </div>
    </section>
  );
};

export default GameOfTheweek;
