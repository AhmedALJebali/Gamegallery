"use client";

import BreadCrump from "@/app/components/ui/breadCrump";
import {
  Award,
  Briefcase,
  Check,
  Flame,
  Globe,
  Heart,
  Rocket,
  Shield,
  Star,
  Users,
} from "lucide-react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const statsData = [
  { icon: Users, number: "90+", label: "Clients" },
  { icon: Globe, number: "30+", label: "Countries" },
  { icon: Briefcase, number: "50+", label: "Projects" },
  { icon: Rocket, number: "120+", label: "Launches" },
  { icon: Star, number: "200+", label: "Reviews" },
  { icon: Award, number: "10+", label: "Awards" },
  { icon: Heart, number: "1k+", label: "Likes" },
  { icon: Flame, number: "300+", label: "Campaigns" },
  { icon: Check, number: "500+", label: "Tasks Done" },
  { icon: Shield, number: "99%", label: "Security" },
];

const StatsSlider = () => {
  return (
    <section className="text-white py-14 px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col items-center">
      <div className="mb-6">
        <BreadCrump title="Portfolio" />
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 leading-snug">
        Lorem Ipsum is simply dummy text of the printing and.
      </h2>
      <p className="text-sm sm:text-base text-center text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <Swiper
        breakpoints={{
          0: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
        }}
        className="w-full max-w-6xl"
      >
        {statsData.map((item, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive, isNext }) => (
              <div className="py-4 h-full">
                <div
                  className={`p-4 sm:p-6 flex flex-col items-center text-center bg-white/20  h-full transition-all duration-300 ${
                    isActive ? "border-r border-amber-500 shadow-md" : ""
                  } ${isNext ? "sm:border-r border-amber-500 shadow-md" : ""}`}
                >
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mb-2 sm:mb-3" />
                  <p className="text-base sm:text-xl font-bold">
                    {item.number}
                  </p>
                  <span className="text-xs sm:text-sm text-gray-300">
                    {item.label}
                  </span>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default StatsSlider;
