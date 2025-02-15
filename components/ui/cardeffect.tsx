"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";



export const ThreeDCardDemo = ({ title, des, img = "", link } : {
  title?: string
  des?: string
  img?: string
  link?: string
}) => {
  return (
    <CardContainer className="inter-var font-mono">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#10132E] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-green-200"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {des}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-2xl group-hover/card:shadow-xl"
            alt={title || "Image"}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-neutral-300"
          >
            See Project →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
