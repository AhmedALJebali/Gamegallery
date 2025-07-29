import Hero from "./_components/_sections/Hero";
import Team from "./_components/_sections/Team";
import Testimonials from "./_components/_sections/Testimonials";
import AboutSection from "./_components/_sections/About";

const page = () => {
  return (
    <div>
      <Hero />
      <Testimonials />
      <AboutSection />
      <Team />
    </div>
  );
};

export default page;
