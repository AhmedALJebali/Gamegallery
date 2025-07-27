import { GameCardType } from "@/Types/index";
import Image from "next/image";
const TrendingCard = ({ GameCard }: { GameCard: GameCardType }) => {
  const { photo, title, followers } = GameCard;
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="h-80 w-full relative">
        <Image src={photo} alt={title} fill className=" object-contain" />
      </div>
      <span className="font-semibold mx-auto text-white rounded-lg flex gap-2 py-3 px-2 items-center">
        <img src="/icons/fire.svg" />
        {followers} Followers
      </span>
    </div>
  );
};

export default TrendingCard;
