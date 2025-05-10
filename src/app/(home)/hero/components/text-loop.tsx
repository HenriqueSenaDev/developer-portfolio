"use client";

import TextLoop from "react-text-loop";

type HeroTextLoopProps = {
  options: string[];
  interval: number;
}

export const HeroTextLoop = ({ options, interval }: HeroTextLoopProps) => {
  return (
    <TextLoop className="text-primary" interval={interval}>
      {options.map((option, idx) => <strong key={idx}>{option}</strong>)}
    </TextLoop>
  );
}
