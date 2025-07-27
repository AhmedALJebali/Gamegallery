import { service } from "@/Types/index";
import Image from "next/image";
import {
  FaCube,
  FaCubes,
  FaDesktop,
  FaGamepad,
  FaLaptop,
  FaMobileAlt,
  FaPlaystation,
  FaRobot,
  FaUnity,
  FaVrCardboard,
} from "react-icons/fa";
import ServiceCard from "../cards/ServiceCard";
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
    <section className="w-full min-h-screen relative my-20">
      <Image src="/ui/bg.png" alt="" fill className="object-cover" />
      <div className="w-full min-h-screen  z-50 relative bg-black/65">
        <div className="w-[80%] mx-auto py-20">
          <div>
            <h2 className="text-4xl font-normal text-center text-white w-[75%] mx-auto leading-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
            <p className="text-white/85 mt-10 w-[90%] text-xl text-center mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="w-full h-full flex flex-wrap justify-center items-center gap-10 mt-20">
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
