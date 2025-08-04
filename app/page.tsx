import GameOfTheweek from "./components/sections/gameOfTheWeek";
import Hero from "./components/sections/heroSection";
import Projects from "./components/sections/projects";
import Services from "./components/sections/services";
import Trending from "./components/sections/trending";

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
