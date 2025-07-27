"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  photo: string;
  title: string;
};

const projects: Project[] = [
  { photo: "/Projects/project1.png", title: "Project 1" },
  { photo: "/Projects/project2.png", title: "Project 2" },
  { photo: "/Projects/project3.png", title: "Project 3" },
  { photo: "/Projects/project4.png", title: "Project 4" },
  { photo: "/Projects/project5.png", title: "Project 5" },
  { photo: "/Projects/project6.png", title: "Project 6" },
];

function AutoSizedImageGrid() {
  const [imageSizes, setImageSizes] = useState<
    { width: number; height: number }[]
  >([]);

  useEffect(() => {
    // Load image sizes dynamically
    const loadImageSizes = async () => {
      const sizes = await Promise.all(
        projects.map(
          (project) =>
            new Promise<{ width: number; height: number }>((resolve) => {
              const img = new window.Image();
              img.src = project.photo;
              img.onload = () => {
                resolve({ width: img.width, height: img.height });
              };
            })
        )
      );
      setImageSizes(sizes);
    };

    loadImageSizes();
  }, []);

  return (
    <section className="w-[90%] mx-auto flex flex-col items-center">
      <div className="w-[80%] mx-auto ">
        <h2 className="text-3xl font-normal text-center text-white w-[75%] mx-auto leading-16">
          Our Recent Projects
        </h2>
        <p className="text-white/85 w-[50%] text-center mx-auto mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-10 ">
        {projects.map((project, index) => {
          const size = imageSizes[index];
          return (
            <div key={index}>
              {size ? (
                <Image
                  src={project.photo}
                  alt={project.title}
                  width={size.width}
                  height={size.height}
                  className="object-contain"
                />
              ) : (
                <div className="w-32 h-32 bg-gray-200 animate-pulse" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AutoSizedImageGrid;
