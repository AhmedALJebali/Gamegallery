import GameOfTheweek from "./components/sections/GameOfTheweek";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Trending from "./components/sections/Trending";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Trending />
      <GameOfTheweek />
      <Services />
      <Projects />
    </main>
  );
}
