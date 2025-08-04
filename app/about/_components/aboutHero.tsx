"use client";
import BreadCrump from "@/app/components/ui/breadCrump";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const HeroImages = [
  {
    name: "Hero1",
    photo: "/Games/about.jpg",
  },
];

const Hero = () => {
  return (
    <section className="sm:w-[95%] w-full mx-auto sm:mr-0 text-white flex flex-row items-center gap-6  scale-[0.85] sm:scale-100 transition-all">
      {/* Left Content */}

      <div className="flex flex-col w-[55%] sm:w-[45%] items-start relative z-10 sm:py-20">
        <BreadCrump title="About Us" />
        <h1 className="text-md sm:text-4xl lg:text-5xl font-bold leading-snug sm:leading-[3.5rem] mt-6 sm:mt-8">
          Lorem Ipsum is simply dummy text of the printing and.
        </h1>
        <p className="font-light my-3 sm:my-6 text-xs sm:text-base leading-relaxed sm:leading-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <button className="bg-amber-500 px-4 sm:px-5 py-2 sm:py-3 rounded-3xl text-xs sm:text-lg font-medium mt-2">
          Get in touch{" "}
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 inline-block ml-1" />
        </button>
      </div>

      {/* Right Image Slider */}
      <div className="w-[60%] relative aspect-[4/3]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          loop={true}
          className="w-full h-full overflow-hidden"
        >
          {HeroImages.map((img) => (
            <SwiperSlide key={img.name}>
              <div className="relative w-full h-full">
                <Image
                  src={img.photo}
                  alt={img.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
