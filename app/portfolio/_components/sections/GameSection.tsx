import { GameCardProps } from "@/Types/index";
import GameCard from "../cards/GameCard";

const GameSection = () => {
  const contentData: GameCardProps[] = [
    {
      toleft: true,
      title: "Lorem Ipsum is simply dummy text of the printing and.",
      description1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      description2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/Games/about.jpg",
      buttonText: "Read More",
    },
    {
      toleft: false,
      title: "Another Section Heading Here",
      description1:
        "This is another dummy paragraph used for testing the second section of the layout.",
      image: "/Games/another.jpg",
      buttonText: "Read More",
    },
    {
      toleft: true,
      title: "Third Section With Some Info",
      description1:
        "The layout should alternate the image position based on the `toleft` flag.",
      description2: "More dummy text to illustrate the layout properly.",
      image: "/Games/third.jpg",
      buttonText: "Read More",
    },
  ];

  return (
    <>
      {contentData.map((item, idx) => (
        <GameCard key={idx} game={item} />
      ))}
    </>
  );
};

export default GameSection;
