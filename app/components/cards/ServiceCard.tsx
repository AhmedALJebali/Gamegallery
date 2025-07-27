import { ArrowRight } from "lucide-react";

import { service } from "@/Types/index";
const ServiceCard = ({ service }: { service: service }) => {
  const { name, Icon } = service;

  return (
    <div className="w-1/5 flex flex-col items-center justify-center gap-3">
      <div className="w-full flex items-center justify-center">
        <div className="rounded-full h-16 w-16 bg-white flex items-center justify-center">
          <Icon className="text-amber-600 w-8 h-8" />
        </div>
      </div>
      <span className="text-center font-semibold text-white">{name}</span>
      <ArrowRight className="w-10 h-10 text-amber-600 cursor-pointer hover:text-amber-600/80" />
    </div>
  );
};

export default ServiceCard;
