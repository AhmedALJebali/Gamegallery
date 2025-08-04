import BreadCrump from "../components/ui/BreadCrump";
import { Search } from "lucide-react";
const HeroSection = () => {
  return (
    <div className="w-full 0 py-12 px-4 sm:px-6 text-center flex flex-col items-center">
      <BreadCrump title="News" />
      <h1 className="text-3xl text-white my-4">
        Lorem Ipsum is simply dummy text of the printing and.
      </h1>{" "}
      <h2 className="text-2xl text-white mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h2>
      <form className="flex w-full max-w-md text-white bg-black text-sm items-center rounded-2xl">
        <Search className="w-6 h-6 mx-4 " />
        <input
          type="email"
          placeholder="Search for news"
          className="flex-1 py-4 px-2 outline-none "
        />
      </form>
    </div>
  );
};

export default HeroSection;
