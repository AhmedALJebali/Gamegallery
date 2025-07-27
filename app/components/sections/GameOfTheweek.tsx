import Image from "next/image";
const GameOfTheweek = () => {
  return (
    <section className="w-[80%] mx-auto ">
      <h1 className="leading-16 x-10 mx-auto text-center text-white text-5xl font-bold">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h1>
      <div className="mt-20 text-white">
        <h2 className="text-4xl font-normal">Lorem Ipsum</h2>
        <p className="text-white/90 mt-10 w-[45%] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className="w-full relative h-[600px] my-20">
        <Image src="/Games/GameofTheweek.png" fill alt="spiderman"
        className="z-10" />
        <Image
          src="/ui/grid.svg"
          className="absolute  left-[75%] translate-x-[-50%] translate-y-[-50%] "
          width={200}
          height={200}
          alt="spiderman"
        />
      </div>
    </section>
  );
};

export default GameOfTheweek;
