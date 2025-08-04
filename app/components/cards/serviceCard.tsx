"use client"
import { ArrowRight } from "lucide-react";
import { service } from "@/Types/index";
import { motion } from "framer-motion";

const ServiceCard = ({ service }: { service: service }) => {
  const { name, Icon } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="w-[26%] md:w-[23%] flex flex-col items-center justify-center gap-3 hover:scale-105 transition duration-300"
    >
      <div className="w-full flex items-center justify-center">
        <div className="rounded-full h-14 w-14 sm:h-16 sm:w-16 bg-white flex items-center justify-center shadow-md">
          <Icon className="text-amber-600 w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>
      <span className="text-center font-semibold text-white text-sm sm:text-base">
        {name}
      </span>
      <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 cursor-pointer hover:text-amber-500" />
    </motion.div>
  );
};

export default ServiceCard;
