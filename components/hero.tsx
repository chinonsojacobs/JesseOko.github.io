import React from 'react'
import { Spotlight } from './ui/spotlight-new'
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/magic-button';
import { FaLocationArrow } from 'react-icons/fa';

const hero = () => {
    return (
      <div className="pb-20 pt-36">
        <div>
          <Spotlight />
          <Spotlight />
          <Spotlight />
        </div>

        <div>
          <div
            className="h-screen w-full dark:bg-black-100 
                bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.2] 
                flex items-center justify-center absolute top-0 left-0"
          >
            {/* Radial gradient for the container to give a faded look */}
            <div
              className="absolute pointer-events-none inset-0 
                    flex items-center justify-center dark:bg-black-100 bg-white 
                    [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            />
          </div>
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div
            className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw]
                flex flex-col items-center justify-center"
          >
            <h2
              className="uppercase tracking-widest text-xs
                    text-center text-green-100 max-w-80"
            >
              Web Magic with NextJS
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Software Engineer specializing in scalable systems, cloud solutions, and data-driven applications."
            />
            <p
              className="uppercase text-center md:tracking-wider 
            font-light text-green-200 mb-4 text-sm md:text-lg lg:text-lg"
            >
              Hey, I&apos;m Jesse — glad to have you here
            </p>

            <a href="#about">
              <MagicButton
                title="Show My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    );
}

export default hero