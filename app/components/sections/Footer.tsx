import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 md:grid-cols-4 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-xl font-bold mb-4">LOGO</h2>
          <p className="text-sm text-white/80 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-sm text-white/60">@Logo</p>
        </div>

        {/* About Us */}
        <div className="md:px-16">
          <h3 className="text-md font-semibold mb-4">About us</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Zeux</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-md font-semibold mb-4">Contact us</h3>
          <p className="text-sm text-white/80 mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-sm text-white/80">+908 89097 890</p>
        </div>

        {/* Social Icons */}
        <div className="col-span-3 md:col-span-1   flex items-end gap-12 md:gap-4 mt-2 md:mt-0 justify-center">
          <IconCircle icon={<Facebook size={16} />} />
          <IconCircle icon={<Instagram size={16} />} />
          <IconCircle icon={<Twitter size={16} />} />
          <IconCircle icon={<Linkedin size={16} />} />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/60">
        Copyright © 2021 Lorem All rights reserved
      </div>
    </footer>
  );
};

// Reusable icon circle component
const IconCircle = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
    {icon}
  </div>
);

export default Footer;
