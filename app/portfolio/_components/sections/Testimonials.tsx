"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];


export default function Testimonials() {
  return (
    <div className="bg-white/30 text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
          Trusted by Thousands of <br className="hidden sm:block" />
          Happy Customers
        </h2>
        <p className="text-white/70 mt-4 text-sm sm:text-base leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br className="hidden sm:block" />
          Lorem Ipsum is simply dummy.
        </p>
      </div>

      <Swiper
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          el: ".swiper-pagination-left",
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !w-3 !h-3 bg-gray-300 rounded-full transition-all duration-300 mx-1",
          bulletActiveClass:
            "swiper-pagination-bullet-active !bg-amber-500 scale-125",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        modules={[Pagination, Navigation, Autoplay]}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            {({ isNext }) => (
              <div
                className={`rounded-xl p-5 sm:p-6 h-full transition-all duration-300 ${
                  isNext
                    ? "border-2 border-amber-600 bg-[#18120E]"
                    : "border sm:border-white bg-[#18120E] border-amber-600 sm:bg-transparent"
                }`}
              >
                <div className="flex items-center mb-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-sm sm:text-base">{t.name}</div>
                    <div className="text-white/70 text-xs sm:text-sm">{t.location}</div>
                  </div>
                  <div className="ml-auto flex items-center text-sm sm:text-base">
                    <span className="font-medium mr-1">{t.rating}</span>
                    <span className="text-orange-400 text-lg">★</span>
                  </div>
                </div>
                <div className="text-white/70 text-sm sm:text-base leading-relaxed">
                  {t.text}
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows and Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 max-w-5xl mx-auto">
        <div className="swiper-pagination-left flex justify-center sm:justify-start gap-3 flex-wrap" />

        <div className="flex gap-4">
          <div className="custom-prev cursor-pointer p-2 hover:bg-amber-600 hover:text-white hover:border-amber-600 text-amber-600 border-2 rounded-full transition">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="custom-next cursor-pointer p-2 hover:bg-amber-600 hover:text-white hover:border-amber-600 text-amber-600 border-2 rounded-full transition">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
