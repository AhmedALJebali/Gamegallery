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
    <div className="relative w-[95%] max-w-7xl mx-auto bg-cover bg-center">
      {/* Background Image */}
      <img
        src="/ui/world-map.svg"
        alt="Map Background"
        className="w-full h-auto object-cover"
      />

      {/* Red Dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full flex items-center justify-center shadow"
          style={{
            top: dot.top,
            left: dot.left,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            border: "3px solid red",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              width: `${dot.size / 3}px`,
              height: `${dot.size / 3}px`,
              backgroundColor: "red",
              borderRadius: "9999px",
            }}
          ></div>
        </div>
      ))}

      {/* Footer Info */}
      <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-10 sm:mt-16 px-4 sm:px-0 text-center relative z-10 mb-10 sm:mb-16">
        {/* Social Icons */}
        <div>
          <h1 className="text-white text-base sm:text-2xl font-semibold mb-3 sm:mb-5 text-center sm:text-left">
            Follow Us
          </h1>
          <div className="flex justify-center sm:justify-start gap-3 sm:gap-5">
            <a
              href="#"
              className="bg-black text-white p-2 sm:p-3 rounded-full hover:bg-gray-800 text-sm sm:text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-black text-white p-2 sm:p-3 rounded-full hover:bg-gray-800 text-sm sm:text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-black text-white p-2 sm:p-3 rounded-full hover:bg-gray-800 text-sm sm:text-lg"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-black text-white p-2 sm:p-3 rounded-full hover:bg-gray-800 text-sm sm:text-lg"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-2 sm:gap-4 border-x border-white px-2 sm:px-4">
          <PhoneCallIcon className="w-6 h-6 sm:w-9 sm:h-9 text-white" />
          <span className="text-white text-sm sm:text-xl font-medium">
            +1 234 567 890
          </span>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-start gap-2 sm:gap-4 px-2 sm:px-0">
          <MapPinIcon className="w-6 h-6 sm:w-9 sm:h-9 text-white" />
          <span className="text-white text-xs sm:text-xl font-medium max-w-[100px] sm:max-w-sm text-center sm:text-left">
            But also the leap into electronic typesetting
          </span>
        </div>
      </div>
    </div>
  );
};

export default RedDotsMap;
