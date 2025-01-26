"use client";

import { cn } from "@/types/utils";
import React, { useEffect, useState, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/Brands/3d-card";
import Image from "next/image";
import Link from "next/link";



export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const isDuplicated = useRef(false);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function forceReflow() {
    scrollerRef.current.offsetHeight; // Read offsetHeight to trigger reflow
  }
  function addAnimation() {
    if (containerRef.current && scrollerRef.current && !isDuplicated.current) {

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    (<div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <CardContainer key= {item.id || idx} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ={50}
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {item.name}
            </CardItem>
            <CardItem
              as="p"
              translateZ={60}
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {item.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={item.image}
                height="10"
                width="10"
                className="h-13 w-full  object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
            <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                {item.market}
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href={item.url}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Visit now →
              </CardItem>

            </div>
          </CardBody>
        </CardContainer>
        ))}


{items.map((item, idx) => (
          <CardContainer key= {item.id || idx} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ={50}
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {item.name}
            </CardItem>
            <CardItem
              as="p"
              translateZ={60}
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
               {item.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={item.image}
                height="100"
                width="100"
                className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
            <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                {item.market}
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href={item.url}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                  Visit now →
              </CardItem>
              
            </div>
          </CardBody>
        </CardContainer>
        ))}
      
      </ul>
      
    </div>)
  );
};

export default InfiniteMovingCards;

