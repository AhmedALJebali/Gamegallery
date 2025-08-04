import AboutSection from "./_components/About";
import Hero from "./_components/aboutHero";
import Team from "./_components/teamSection";
import Testimonials from "./_components/testimonialsSection";

const page = () => {
  return (
    <main>
      <Hero />
      <Testimonials />
      <AboutSection />
      <Team />
    </main>
  );
};

export default page;
