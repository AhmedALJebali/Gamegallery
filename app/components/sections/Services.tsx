"use client";

import Image from "next/image";
import { FaCube, FaCubes, FaDesktop, FaGamepad, FaLaptop, FaMobileAlt, FaPlaystation, FaRobot, FaUnity, FaVrCardboard } from "react-icons/fa";
import ServiceCard from "../cards/ServiceCard";
import { service } from "@/Types/index";

const services: service[] = [
  { name: "Mobile Game Development", Icon: FaMobileAlt },
  { name: "PC Game Development", Icon: FaDesktop },
  { name: "PS4 Game Development", Icon: FaPlaystation },
  { name: "AR/VR Solutions", Icon: FaVrCardboard },
  { name: "AR/ VR Design", Icon: FaCubes },
  { name: "3D Modelings", Icon: FaCube },
  { name: "Console Games", Icon: FaGamepad },
  { name: "WebGL Games", Icon: FaLaptop },
  { name: "Unity Development", Icon: FaUnity },
  { name: "AI NPC Systems", Icon: FaRobot },
];

const Services = () => {
  return (
    <section className="relative w-full mb-20 overflow-hidden min-h-screen">
      <Image src="/ui/bg.png" alt="background" fill className="object-cover z-0" />
      <div className="relative z-10 bg-black/70 w-full min-h-screen">
        <div className="w-[90%] mx-auto py-16 flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-white max-w-3xl leading-snug">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h2>
          <p className="text-white/80 mt-6 text-sm sm:text-lg max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-16 w-full">
            {services.map((service) => (
              <ServiceCard service={service} key={service.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
