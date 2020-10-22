import React, { useEffect, useState } from "react";
import { shuffle, synthSpeak, randomInteger } from "../utils";
import { NextExercise } from "./NextExercise";

export const Subtract = () => {

    const [ randA, setRandA ] = useState(0)
    const [ randB, setRandB ] = useState(0)
    const [ randArray, setRandArray ] = useState([])
    const [ selection, setSelection ] = useState(0)

    const [ right, setRight ] = useState(false);
    const [ wrong, setWrong ] = useState(false);

    const isEqual = num => () => {
        setSelection(num)
        setRight(num === randA - randB);
        setWrong(num !== randA - randB);
    }

    const initialize = () => {
        const max = 20;
        const maxNumbers = Array.from(Array(max), (_, i) => i + 1);
        const optionNumbers = [];

        const a = maxNumbers.splice(Math.floor(Math.random() * maxNumbers.length), 1)[0];
        let b = randomInteger(1, 10);
        while (b >= a) {
            b = randomInteger(1, 10);
        }

        optionNumbers.push(a - b)
            
        while (optionNumbers.length < 6) {
            const optionNumber = maxNumbers.splice(Math.floor(Math.random() * maxNumbers.length), 1)[0];
            if (!optionNumbers.includes(optionNumber)) {
                optionNumbers.push(optionNumber)
            }
        }
        
        setRandA(a)
        setRandB(b)

        setRandArray(shuffle(optionNumbers));
    }

    const reset = () => {
        setRight(false);
        setWrong(false);
        
        initialize();
    }

    useEffect(() => {
        (randA && randB) && synthSpeak(`How much is ${randA} minus ${randB}`)
    }, [ randA, randB ]);

    useEffect(() => {
        right && synthSpeak(`Correct! ${ selection } is equal to ${randA} minus ${randB}`, "happy")
    }, [ right, selection, randA, randB ]);

    useEffect(() => {
        wrong && synthSpeak("Not quite. Try again.", "sad")
    }, [ wrong ]);

    useEffect(() => {
        initialize();
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-6xl">How much is &hellip;</h1>

            <p className="text-6xl mt-8">
                <span className="inline-block bg-blue-900 hover:bg-blue-800 text-blue-200 hover:text-blue-100 font-bold mx-8 py-2 px-4 w-32 rounded">{ randA }</span>
                &minus; 
                <span className="inline-block bg-yellow-200 hover:bg-yellow-300 text-yellow-800 hover:text-yellow-700 font-bold mx-8 py-2 px-4 w-32 rounded">{ randB }</span>
            </p>

            <p className="text-4xl mt-12">
                {
                    randArray.map((num, i) => (
                        <button key={ i } className="bg-gray-200 hover:bg-blue-800 text-gray-900 hover:text-blue-100 font-bold mx-8 py-2 px-4 w-20 rounded" type="button" onClick={ isEqual(num) }>{ num }</button>
                    ))
                }
            </p>
            {
                (!right && !wrong) &&
                <p className="text-3xl my-4 p-12">What do you think?</p>
            }
            {
                right &&
                <p className="text-3xl my-4 p-12 rounded">
                    <span className="font-bold text-green-800">✔ Correct!</span> { selection } <span className="font-bold">is</span> equal to { randA } minus { randB }
                </p>
            }
            {
                wrong &&
                <p className="text-3xl text-purple-900 my-4 p-12 rounded">Not quite. Try again. <span role="img" aria-hidden="true">👍</span></p>
            }

            <p className="text-3xl mt-4">
                <button className="bg-orange-900 hover:bg-orange-800 text-orange-200 hover:text-orange-100 font-bold py-2 px-4 rounded shadow" type="button" onClick={ reset }>Try new numbers</button>
            </p>

            <NextExercise currentExercise="between" />
        </div>
    );
};
