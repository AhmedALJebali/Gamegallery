import { GameCardType } from "@/Types/index";
import Image from "next/image";

const TrendingCard = ({ GameCard }: { GameCard: GameCardType }) => {
  const { photo, title, followers } = GameCard;
  return (
    <div className="w-full flex flex-col gap-3">
   
      <div className="relative w-full h-60 sm:h-72 md:h-80">
        <Image
          src={photo}
          alt={title}
          fill
          className="object-contain rounded-xl"
        />
      </div>

      <span className="font-semibold mx-auto text-sm sm:text-base text-white rounded-lg flex gap-2 py-2 px-2 items-center bg-white/10">
        <img src="/icons/fire.svg" className="w-5 h-5" />
        {followers} Followers
      </span>
    </div>
  );
};

export default TrendingCard;
