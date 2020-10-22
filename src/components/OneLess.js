import React, { useState, useEffect } from "react";
import { shuffle } from "../utils";
import { NextExercise } from "./NextExercise";

export const OneLess = () => {

    const [ randA, setRandA ] = useState(0)
    const [ randArray, setRandArray ] = useState([])
    const [ selection, setSelection ] = useState(0)

    const [ right, setRight ] = useState(false);
    const [ wrong, setWrong ] = useState(false);

    const isOneLess = num => () => {
        speak(num)
        setSelection(num)
        setRight(num === randA - 1);
        setWrong(num !== randA - 1);
    }

    const speak = num => () => {
        const utterance = new SpeechSynthesisUtterance(num)
        speechSynthesis.speak(utterance)
    }

    const initialize = () => {
        const numbers = Array.from(Array(12), (_, i) => i + 1);
        const optionNumbers = [];

        const a = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];

        optionNumbers.push(a - 1)
            
        while (optionNumbers.length < 6) {
            const optionNumber = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
            if (!optionNumbers.includes(optionNumber)) {
                optionNumbers.push(optionNumber)
            }
        }
        
        setRandA(a)

        setRandArray(shuffle(optionNumbers));
    }

    const reset = () => {
        setRight(false);
        setWrong(false);
        
        initialize();
    }

    useEffect(() => {
        if (randA > 0) {
            const utterance = new SpeechSynthesisUtterance(`Pick the number that is 1 less than ${randA}`)
            speechSynthesis.speak(utterance)
        }
    }, [ randA ]);

    useEffect(() => {
        if (right) {
            const utterance = new SpeechSynthesisUtterance(`Correct! ${ selection } is 1 less than ${ randA }`)
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
            <h1 className="text-6xl">Pick the number that is 1 less than &hellip;</h1>

            <p className="text-6xl mt-8">
                <span className="inline-block bg-pink-900 hover:bg-pink-800 text-pink-200 hover:text-pink-100 font-bold mx-8 py-2 px-4 w-32 rounded">{ randA }</span>
            </p>

            <p className="text-4xl mt-12">
                {
                    randArray.map((num, i) => (
                        <button key={ i } className="bg-gray-200 hover:bg-blue-800 text-gray-900 hover:text-blue-100 font-bold mx-8 py-2 px-4 w-20 rounded" type="button" onClick={ isOneLess(num) }>{ num }</button>
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
                    <span className="font-bold text-green-800">✔ Correct!</span> { selection } <span className="font-bold">is</span> one less than { randA }
                </p>
            }
            {
                wrong &&
                <p className="text-3xl text-purple-900 my-4 p-12 rounded">Ooh! Not quite. Try again. <span role="img" aria-hidden="true">👍</span></p>
            }

            <p className="text-3xl mt-4">
                <button className="bg-orange-900 hover:bg-orange-800 text-orange-200 hover:text-orange-100 font-bold py-2 px-4 rounded shadow" type="button" onClick={ reset }>Try new numbers</button>
            </p>

            <NextExercise currentExercise="one-less" />
        </div>
    )
}