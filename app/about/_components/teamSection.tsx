"use client";
import { TeamMember } from "@/Types/index";

import "swiper/css";

import "swiper/css/effect-coverflow"; // For animation effect
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "./teamCard";
const TeamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO",
    avatar: "/Teams/avatar1.svg",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    avatar: "/Teams/avatar2.svg",
  },
  {
    name: "Mike Brown",
    role: "COO",
    avatar: "/Teams/avatar3.svg",
  },
  {
    name: "Amy Green",
    role: "CFO",
    avatar: "/Teams/avatar4.svg",
  },
];

const Team = () => {
  return (
    <section className="w-[95%] md:w-[80%]  mx-auto text-white">
      <span className="w-full font-bold text-3xl">Our Team</span>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={30}
        loop={true}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="mt-10"
      >
        {[...TeamMembers, ...TeamMembers].map((member, i) => (
          <SwiperSlide key={member.name + i}>
            <TeamCard Member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Team;
