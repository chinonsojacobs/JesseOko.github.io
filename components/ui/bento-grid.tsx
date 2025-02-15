'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { useState } from "react";
import dynamic from "next/dynamic";
import animationData from "@/data/confetti.json";
import MagicButton from "./magic-button";
import { IoCopyOutline } from "react-icons/io5";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {

const [copied, setCopied] = useState(false);


const handleCopy = () => {
  const text = "chinonsojacobs@gmail.com";
  navigator.clipboard.writeText(text);
  setCopied(true);
};

  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto font-mono",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied,setCopied]= useState(false)

  const handleCopy = () => {
    const text = "chinonsojacobs@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-2xl group/bento hover:shadow-xltransition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-green-100/0.1",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/*<div
              className="absolute z-50 flex items-center justify-center
            text-white font-bold"
            />*/}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-mono font-extralight text-green-200 text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-mono font-bold text-lg lg:text-2xl max-w-96 z-10">
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-1 md:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["NodeJS", "Python", "AWS"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-5 px-5 text-xs lg:text-xs font-mono opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {["NextJS", "MongoDB", "SQL"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-5 px-5 text-xs lg:text-xs font-mono opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                {["JAVA", "C#", "Jest"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-5 px-5 text-xs lg:text-xs font-mono opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
              <div />
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
              <MagicButton
                title={"See my CV"}
                icon={<IoCopyOutline />}
                position="right"
                handleClick={() =>
                  (window.location.href = "/JesseOkoronkwo.pdf")
                }
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
