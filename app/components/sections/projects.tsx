"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  photo: string;
  title: string;
};

type ImageSize = {
  width: number;
  height: number;
};

const projects: Project[] = [
  { photo: "/Projects/project1.png", title: "Project 1" },
  { photo: "/Projects/project2.png", title: "Project 2" },
  { photo: "/Projects/project3.png", title: "Project 3" },
  { photo: "/Projects/project4.png", title: "Project 4" },
  { photo: "/Projects/project5.png", title: "Project 5" },
  { photo: "/Projects/project6.png", title: "Project 6" },
];

const AutoSizedImageGrid = () => {
  const [imageSizes, setImageSizes] = useState<ImageSize[]>([]);

  useEffect(() => {
    const loadImageSizes = async () => {
      const sizes = await Promise.all(
        projects.map((project) => {
          return new Promise<ImageSize>((resolve) => {
            const img = new window.Image();
            img.src = project.photo;
            img.onload = () => {
              resolve({ width: img.width, height: img.height });
            };
          });
        })
      );
      setImageSizes(sizes);
    };

    loadImageSizes();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto md:px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl text-center mb-10">
        <h2 className="text-3xl font-semibold text-white">
          Our Recent Projects
        </h2>
        <p className="text-white/70 mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project, index) => {
          const size = imageSizes[index];

          return (
            <div key={index} className="relative">
              <div className="hidden md:block">
                {size ? (
                  <Image
                    src={project.photo}
                    alt={project.title}
                    width={size.width}
                    height={size.height}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-40 h-40 bg-gray-300 rounded animate-pulse" />
                )}
              </div>

              <div className="scale-[1.1] block md:hidden relative w-[140px] aspect-4/3 rounded-md overflow-hidden">
                {size ? (
                  <Image
                    src={project.photo}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 animate-pulse rounded-md" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button className="bg-black/20 text-base sm:text-lg px-6 py-3 rounded-lg hover:bg-black/40 duration-150 cursor-pointer my-10 text-white">
        SEE ALL
      </button>
    </section>
  );
};

export default AutoSizedImageGrid;
