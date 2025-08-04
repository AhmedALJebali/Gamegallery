import GameSection from "./_components/gameSection";
import Stats from "./_components/statsSection";
import Testimonials from "./_components/testimonialsSection";

const page = () => {
  return (
    <main>
      <Stats />
      <GameSection />
      <Testimonials />
    </main>
  );
};

export default page;
