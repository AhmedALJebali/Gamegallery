"use client";
import { GameCardType } from "@/Types/index";
import "swiper/css";

import "swiper/css/effect-coverflow"; // For animation effect
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingCard from "../cards/TrendingCard";

const Teranding = () => {
  const trendingGames: GameCardType[] = [
    { photo: "/Games/game1.png", title: "Valorant", followers: 300 },
    { photo: "/Games/game2.png", title: "League of Legends", followers: 100 },
    { photo: "/Games/game3.png", title: "Apex Legends", followers: 60 },
    { photo: "/Games/game4.png", title: "Fortnite", followers: 200 },
  ];

  return (
    <section className="w-full px-4 md:px-10 xl:px-20 mt-44 mb-20">
      <div className="flex flex-col sm:flex-row w-full justify-between items-center text-white gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          Currently Trending Games
        </h1>
        <button className="bg-black/20 text-lg sm:text-xl px-6 py-2 sm:py-3 rounded-lg hover:bg-black/40 duration-200 cursor-pointer">
          SEE ALL
        </button>
      </div>

      <div className="mt-10">
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
        >
          {[...trendingGames, ...trendingGames].map((game, i) => (
            <SwiperSlide key={game.title + i}>
              <TrendingCard GameCard={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Teranding;
