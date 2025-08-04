"use client";
import { Testimonial } from "@/Types/index";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./testimonialCard";
const testimonials: Testimonial[] = [
  {
    title: "Excellent Service",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    name: "John Doe",
    color: "bg-blue-600/30",
  },
  {
    title: "Excellent Service",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    name: "John Doe",
    color: "bg-red-600/30",
  },
  {
    title: "Excellent Service",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    name: "John Doe",
    color: "bg-yellow-600/30",
  },
  {
    title: "Excellent Service",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    name: "John Doe",
    color: "bg-cyan-600/30",
  },
];
const Testimonials = () => {
  return (
    <section className="w-[95%] md:w-[80%]  mx-auto text-white mb-10">
      <span className="w-full font-bold text-3xl">Why work with us</span>
      <Swiper
        spaceBetween={30}
        loop={true}
        navigation
        breakpoints={{
          0: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
