import { GameCardProps } from "@/Types/index";
import Image from "next/image";

const GameCard = ({ game }: { game: GameCardProps }) => {
  const { toleft, title, description1, description2, image, buttonText } = game;

  return (
    <section
      className={`w-full max-w-7xl mx-auto text-white flex ${
        toleft ? "flex-row-reverse" : "flex-row"
      } gap-6 items-center justify-between py-10 px-4 sm:px-6 lg:px-12`}
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 relative z-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug md:leading-[3rem]">
          {title}
        </h1>
        <p className="font-light my-3 md:my-4 text-xs sm:text-sm md:text-base">
          {description1}
        </p>
        <p className="font-light mb-2 md:mb-3 text-xs sm:text-sm md:text-base">
          {description2}
        </p>
        <button className="bg-amber-500 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium mt-3">
          {buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-[80%] md:w-[65%] lg:w-[40%] h-[200px] sm:h-[300px] md:h-[350px] relative rounded-xl overflow-hidden">
        <Image
          src={ "/Games/about.jpg"}
          alt="Game"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default GameCard;
