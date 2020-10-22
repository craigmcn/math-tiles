import React, { useEffect, useState } from "react";
import { shuffle } from "../utils";
import { NextExercise } from "./NextExercise";

export const Between = () => {

    const [ randA, setRandA ] = useState(0)
    const [ randB, setRandB ] = useState(0)
    const [ randArray, setRandArray ] = useState([])
    const [ selection, setSelection ] = useState(0)

    const [ right, setRight ] = useState(false);
    const [ wrong, setWrong ] = useState(false);

    const isBetween = num => () => {
        setSelection(num)
        setRight(num === randA + 1);
        setWrong(num !== randA + 1);
    }

    const initialize = () => {
        const numbers = Array.from(Array(12), (_, i) => i + 1);
        const optionNumbers = [];

        const a = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
        const b = a + 2;

        optionNumbers.push(a + 1)
            
        while (optionNumbers.length < 6) {
            const optionNumber = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
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
        if (randA && randB) {
            const utterance = new SpeechSynthesisUtterance(`Pick the number that is between ${randA} and ${randB}`)
            speechSynthesis.speak(utterance)
        }
    }, [ randA, randB ]);

    useEffect(() => {
        if (right) {
            const utterance = new SpeechSynthesisUtterance(`Correct! ${ selection } is between ${randA} and ${randB}`)
            utterance.rate = 1.2
            utterance.pitch = 1.4
            speechSynthesis.speak(utterance)
        }
    }, [ right, selection, randA ]);

    useEffect(() => {
        if (wrong) {
            const utterance = new SpeechSynthesisUtterance(`Ooh. Not quite. Try again.`)
            utterance.rate = 1.3
            utterance.pitch = 0.8
            speechSynthesis.speak(utterance)
        }
    }, [ wrong ]);

    useEffect(() => {
        initialize();
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-6xl">Pick the number that is between &hellip;</h1>

            <p className="text-6xl mt-8">
                <span className="inline-block bg-blue-900 hover:bg-blue-800 text-blue-200 hover:text-blue-100 font-bold mx-8 py-2 px-4 w-24 rounded">{ randA }</span>
                <span className="inline-block bg-yellow-200 hover:bg-yellow-300 text-yellow-800 hover:text-yellow-700 font-bold mx-8 py-2 px-4 w-24 rounded">{ randB }</span>
            </p>

            <p className="text-4xl mt-12">
                {
                    randArray.map((num, i) => (
                        <button key={ i } className="bg-gray-200 hover:bg-blue-800 text-gray-900 hover:text-blue-100 font-bold mx-8 py-2 px-4 w-20 rounded" type="button" onClick={ isBetween(num) }>{ num }</button>
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
                    <span className="font-bold text-green-800">✔ Correct!</span> { selection } <span className="font-bold">is</span> between { randA } and { randB }
                </p>
            }
            {
                wrong &&
                <p className="text-3xl text-purple-900 my-4 p-12 rounded">Ooh! Not quite. Try again. <span role="img" aria-hidden="true">👍</span></p>
            }

            <p className="text-3xl mt-4">
                <button className="bg-orange-900 hover:bg-orange-800 text-orange-200 hover:text-orange-100 font-bold py-2 px-4 rounded shadow" type="button" onClick={ reset }>Try new numbers</button>
            </p>

            <NextExercise currentExercise="between" />
        </div>
    );
};
