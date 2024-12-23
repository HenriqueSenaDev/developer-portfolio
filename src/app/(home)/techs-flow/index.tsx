"use client";

import { FirebaseIcon } from "@/assets/vectors/tech-icons/firebase";
import { MongodbIcon } from "@/assets/vectors/tech-icons/mongodb";
import { NestjsIcon } from "@/assets/vectors/tech-icons/nestjs";
import { NextjsIcon } from "@/assets/vectors/tech-icons/nextjs";
import { PostgresqlIcon } from "@/assets/vectors/tech-icons/postgresql";
import { ReactIcon } from "@/assets/vectors/tech-icons/react";
import { TailwindcssIcon } from "@/assets/vectors/tech-icons/tailwindcss";
import { TypeScriptIcon } from "@/assets/vectors/tech-icons/typescript";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import "./animation.css";

type TechIconProps = ComponentPropsWithoutRef<"svg">;

const orderedTechIcons: React.FC<TechIconProps>[] = [
  TypeScriptIcon,
  ReactIcon,
  TailwindcssIcon,
  NextjsIcon,
  NestjsIcon,
  MongodbIcon,
  PostgresqlIcon,
  FirebaseIcon,
];

export const TechsFlow = () => {
  const [techs, setTechs] =
    useState<React.FC<TechIconProps>[]>(orderedTechIcons);

  const lastIndex = useRef<number>(0);

  const toggleLast = () => {
    const incrementedIndex = lastIndex.current + 1;

    lastIndex.current =
      incrementedIndex == orderedTechIcons.length ? 0 : incrementedIndex;
  };

  const handleTechOut = () => {
    const techToInsert = orderedTechIcons[lastIndex.current];
    setTechs((prev) => [...prev.slice(1), techToInsert]);

    toggleLast();
  };

  useEffect(() => {
    const firstTech = document.querySelector("#tech-0");
    const containerElement = document.querySelector("#tech-flows-container");

    if (!firstTech || !containerElement) return;

    // Observer instance
    const options = {
      root: containerElement,
      rootMargin: "0px", // Margin around the root
      threshold: 0, // Threshold at which callback is triggered
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) handleTechOut();
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(firstTech);
  }, [techs]);

  return (
    <div
      id="tech-flows-container"
      className="w-full overflow-hidden bg-primary h-[52px] flex items-center px-[32px] gap-[32px]"
    >
      {techs.map((TechIcon, index) => (
        <TechIcon
          key={index}
          id={`tech-${index}`}
          className="flex-shrink-0 size-[22px] fill-tertiary tech-icon-movement"
        />
      ))}
    </div>
  );
};
