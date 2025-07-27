"use client";
import { GameCardType } from "@/Types/index";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingCard from "../cards/TrendingCard";

const Teranding = () => {
  const trendingGames: GameCardType[] = [
    {
      photo: "/Games/game1.png",
      title: "Valorant",
      followers: 300,
    },
    {
      photo: "/Games/game2.png",
      title: "League of Legends",
      followers: 100,
    },
    {
      photo: "/Games/game3.png",
      title: "Apex Legends",
      followers: 60,
    },
    {
      photo: "/Games/game4.png",
      title: "Fortnite",
      followers: 200,
    },
  ];

  return (
    <section className="w-[80%] mx-auto mt-50 mb-40">
      <div className="flex w-full justify-between text-white px-2">
        <h1 className="text-3xl font-bold">Currently Trending Games</h1>
        <button className="bg-black/20 text-xl px-6 py-3 rounded-lg hover:bg-black/40 duration-150 cursor-pointer">
          SEE ALL
        </button>
      </div>

      <div className="mt-10">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          navigation
        >
          {trendingGames.map((game) => (
            <SwiperSlide key={game.title}>
              <TrendingCard GameCard={game} />
            </SwiperSlide>
          ))}
          {trendingGames.map((game) => (
            <SwiperSlide key={game.title + "-copy"}>
              <TrendingCard GameCard={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Teranding;
