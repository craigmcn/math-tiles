import React, { useEffect, useState } from "react";
import { NextExercise } from "./NextExercise";

export const Bigger = () => {

    const [ randA, setRandA ] = useState(0)
    const [ randB, setRandB ] = useState(0)
    const [ randArray, setRandArray ] = useState([])

    const [ right, setRight ] = useState(false);
    const [ wrong, setWrong ] = useState(false);

    const isBiggerA = () => {
        setRight(randA > randB);
        setWrong(randA < randB);
    }

    const isBiggerB = () => {
        setRight(randB > randA);
        setWrong(randB < randA);
    }

    const initialize = () => {
        const numbers = Array.from(Array(12), (_, i) => i + 1);

        const a = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
        const b = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
        
        setRandA(a)
        setRandB(b)

        setRandArray([a, b].sort((a, b) => a - b));
    }

    const reset = () => {
        setRight(false);
        setWrong(false);
        
        initialize();
    }

    useEffect(() => {
        initialize();
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-6xl">Pick the higher number</h1>
            <p className="text-5xl mt-12">
                <button className="bg-blue-900 hover:bg-blue-800 text-blue-200 hover:text-blue-100 font-bold mx-8 py-2 px-4 w-24 rounded" type="button" onClick={ isBiggerA }>{ randA }</button>
                <button className="bg-yellow-200 hover:bg-yellow-300 text-yellow-800 hover:text-yellow-700 font-bold mx-8 py-2 px-4 w-24 rounded" type="button" onClick={ isBiggerB }>{ randB }</button>
            </p>
            {
                (!right && !wrong) &&
                <p className="text-3xl my-4 p-12">What do you think?</p>
            }
            {
                right &&
                <p className="text-3xl my-4 p-12 rounded">
                    <span className="font-bold text-green-800">✔ Correct!</span> { randArray[1] } <span className="font-bold">is</span> bigger than { randArray[0] }
                </p>
            }
            {
                wrong &&
                <p className="text-3xl text-purple-900 my-4 p-12 rounded">Ooh! Not quite. Try again. <span role="img" aria-hidden="true">👍</span></p>
            }

            <p className="text-3xl mt-4">
                <button className="bg-orange-900 hover:bg-orange-800 text-orange-200 hover:text-orange-100 font-bold py-2 px-4 rounded shadow" type="button" onClick={ reset }>Try new numbers</button>
            </p>

            <NextExercise currentExercise="bigger" />
        </div>
    );
};
