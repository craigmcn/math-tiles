import React from "react";
import { Controls } from "./Controls";

interface ExerciseProps {
  title: string;
  init: () => void;
  children: React.ReactNode;
}

const Exercise = ({ title, init, children }: ExerciseProps) => {
  return (
    <div className="text-center mt-8 sm:mt-3">
      <h1 className="text-3xl md:text-4xl lg:text-6xl">{title}</h1>

      {children}

      <Controls init={init} />
    </div>
  );
};

export { Exercise };
