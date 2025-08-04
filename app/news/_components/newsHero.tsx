import { Search } from "lucide-react";
import BreadCrump from "../../components/ui/breadCrump";

const HeroSection = () => {
  return (
    <section className="w-full py-10 sm:py-16 sm:px-6 text-center flex flex-col items-center">
      <BreadCrump title="News" />

      <h1 className="text-xl sm:text-3xl text-white font-semibold my-3 sm:my-4 max-w-3xl">
        Lorem Ipsum is simply dummy text of the printing and.
      </h1>

      <h2 className="text-base text-white mb-6 sm:mb-10 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h2>

      <form className="flex w-full max-w-md bg-black text-sm items-center rounded-2xl overflow-hidden">
        <div className="px-3 sm:px-4">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <input
          type="text"
          placeholder="Search for news"
          className="flex-1 py-3 sm:py-4 px-2 outline-none bg-black text-white placeholder-gray-400 text-sm sm:text-base"
        />
      </form>
    </section>
  );
};

export default HeroSection;
