import GameSection from "./_components/sections/GameSection";
import Stats from "./_components/sections/Stats";
import Testimonials from "./_components/sections/Testimonials";

const page = () => {
  return (
    <div>
      <Stats />
      <GameSection />
      <Testimonials />
    </div>
  );
};

export default page;
