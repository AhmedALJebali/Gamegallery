import { MapPinIcon, PhoneCallIcon } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const RedDotsMap = () => {
  const dots = [
    { top: "15%", left: "22%", size: 16 },
    { top: "28%", left: "35%", size: 20 },
    { top: "40%", left: "60%", size: 14 },
    { top: "50%", left: "75%", size: 18 },
    { top: "65%", left: "45%", size: 16 },
    { top: "70%", left: "25%", size: 14 },
    { top: "80%", left: "80%", size: 12 },
  ];

  return (
    <section className="relative w-[95%] max-w-7xl mx-auto bg-cover bg-center">
      <div className="relative w-full max-w-7xl mx-auto aspect-[2/1]">
        {/* Background Image */}
        <img
          src="/ui/world-map.svg"
          alt="Map Background"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />

        {/* Red Dots */}
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center rounded-full"
            style={{
              top: dot.top,
              left: dot.left,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              border: "2px solid red",
              backgroundColor: "white",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              style={{
                width: `${dot.size / 3}px`,
                height: `${dot.size / 3}px`,
                backgroundColor: "red",
                borderRadius: "9999px",
              }}
            />
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="grid grid-cols-3 gap-4 sm:gap-10 mt-8 sm:mt-16 px-2 sm:px-0 text-center relative z-10 mb-8 sm:mb-16">
        {/* Social Icons */}
        <div>
          <h1 className="text-white text-xs sm:text-2xl font-semibold mb-2 sm:mb-5 text-center sm:text-left">
            Follow Us
          </h1>
          <div className="flex justify-center sm:justify-start gap-2 sm:gap-5">
            <a
              href="#"
              className="bg-black text-white p-1.5 sm:p-3 rounded-full hover:bg-gray-800 text-xs sm:text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-black text-white p-1.5 sm:p-3 rounded-full hover:bg-gray-800 text-xs sm:text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-black text-white p-1.5 sm:p-3 rounded-full hover:bg-gray-800 text-xs sm:text-lg"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-black text-white p-1.5 sm:p-3 rounded-full hover:bg-gray-800 text-xs sm:text-lg"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-1 sm:gap-4 border-x border-white px-1 sm:px-4">
          <PhoneCallIcon className="w-5 h-5 sm:w-9 sm:h-9 text-white" />
          <span className="text-white text-xs sm:text-xl font-medium">
            +1 234 567 890
          </span>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-start gap-1 sm:gap-4 px-1 sm:px-0">
          <MapPinIcon className="w-5 h-5 sm:w-9 sm:h-9 text-white" />
          <span className="text-white text-xs sm:text-xl font-medium max-w-[80px] sm:max-w-sm text-center sm:text-left leading-tight">
            But also the leap into electronic typesetting
          </span>
        </div>
      </div>
    </section>
  );
};

export default RedDotsMap;
