import { TeamMember } from "@/Types/index";
import Image from "next/image";

const TeamCard = ({ Member }: { Member: TeamMember }) => {
  const { name, role, avatar } = Member;

  return (
    <div className="w-full rounded-3xl bg-white/30 min-h-48 flex flex-col pb-6">
      <div className="flex items-center h-48 sm:h-52 md:h-56 lg:h-60 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto relative">
        <Image
          src={avatar}
          alt={name}
          className="rounded-full object-cover"
          fill
        />
      </div>

      <div className="text-lg sm:text-xl md:text-2xl font-bold w-full text-center mt-[-10px]">
        {name}
      </div>
      <div className="text-sm sm:text-base md:text-lg font-normal w-full text-center">
        {role}
      </div>
    </div>
  );
};

export default TeamCard;
