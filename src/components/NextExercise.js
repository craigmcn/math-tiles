import React from "react";
import { Link, useLocation } from "react-router-dom";
import { exercises } from "../utils"

export const NextExercise = () => {

    const location = useLocation()
    const currentExercise = location.pathname.substring(1);

    const newExercises = [ ...exercises ]
    newExercises.splice(exercises.indexOf(currentExercise), 1)
    const exercise = newExercises[Math.floor(Math.random() * newExercises.length)]

    return (
        <p className="mt-2 lg:mt-4 ml-2 lg:ml-0">
            <Link className="bg-gray-100 hover:bg-gray-200 text-blue-800 hover:text-blue-900 font-bold py-2 px-4 rounded shadow whitespace-no-wrap" to={ `/${exercise}` } >New exercise</Link>
        </p>
    )
}