import React from "react";
import { Link } from "react-router-dom";
import { exercises } from "../utils"

export const NextExercise = (props) => {

    const { currentExercise } = props;

    let exercise;
    while (!exercise) {
        const potentialExercise = exercises[Math.floor(Math.random() * exercises.length)]
        if (potentialExercise !== currentExercise) {
            exercise = potentialExercise;
            break;
        }
    }

    return (
        <p className="text-3xl mt-4">
            <Link className="bg-gray-100 hover:bg-gray-200 text-blue-800 hover:text-blue-900 font-bold py-2 px-4 rounded shadow" to={ `/${exercise}` } >New exercise</Link>
        </p>
    )
}