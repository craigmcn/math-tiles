import React from "react";
import { NextExercise } from "./NextExercise";

export const Controls = ({ init }) => (
    <div className="flex justify-center content-center lg:block text-xl lg:text-3xl">
        <p className="">
            <button className="bg-orange-800 hover:bg-orange-700 text-orange-200 hover:text-orange-100 font-bold py-2 px-4 rounded shadow" type="button" onClick={ init }>Try new numbers</button>
        </p>

        <NextExercise />
    </div>
);
