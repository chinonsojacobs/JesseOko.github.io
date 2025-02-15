import React from "react";
import { projects } from "@/data";
import { ThreeDCardDemo } from "./ui/cardeffect";

const RecentProjects = () => {
  return (
    <div className="py-20 font-mono" id="projects">
      <h1 className="text-4xl font-bold text-center capitalize">
        Small selection of{" "}
        <span className="text-green-200">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center
                justify-center sm:w-96 w-[80vw] mx-8 lg:my-0 my-10"
          >
            <ThreeDCardDemo title={title} des={des} img={img} link={link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
