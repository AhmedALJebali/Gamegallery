import { Testimonial } from "@/Types/index";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { title, content, name, color } = testimonial;

  return (
    <div className="w-full rounded-3xl bg-white/30 min-h-64 flex flex-col p-6 sm:p-8 md:p-10">
      <div
        className={`text-sm sm:text-base md:text-lg ${color} w-fit pl-3 pr-6 sm:pr-8 py-1.5 sm:py-2 rounded-2xl`}
      >
        {name}
      </div>

      <div className="text-base sm:text-lg md:text-xl font-bold mt-4 sm:mt-5">
        {title}
      </div>
      <div className="text-sm sm:text-base md:text-lg font-normal mt-3 sm:mt-5">
        {content}
      </div>
    </div>
  );
};

export default TestimonialCard;
