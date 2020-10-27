import React, { useCallback, useContext, useEffect, useState } from "react";
import { randomInteger, shuffle, synthSpeak } from "../utils";
import { StoreContext } from '../store'
import { Exercise } from "./Exercise";
import { Status } from "./Status";

export const Add = () => {

    const {
        sounds: [ sounds ],
        started: [ started ],
        right: [ right, setRight ],
        wrong: [ wrong, setWrong ]
    } = useContext(StoreContext)

    const title = "How much is"

    const [ randA, setRandA ] = useState(0)
    const [ randB, setRandB ] = useState(0)
    const [ randArray, setRandArray ] = useState([])
    const [ selection, setSelection ] = useState(0)

    const isEqual = num => () => {
        setSelection(num)
        setRight(num === randA + randB);
        setWrong(num !== randA + randB);
    }

    const initialize = useCallback(() => {
        setRight(false);
        setWrong(false);

        const numbers = Array.from(Array(10), (_, i) => i + 1);
        const max = 20;
        const maxNumbers = Array.from(Array(max), (_, i) => i + 1);
        const optionNumbers = [];

        const a = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
        const b = randomInteger(1, 10);

        optionNumbers.push(a + b)
            
        while (optionNumbers.length < 6) {
            const optionNumber = maxNumbers.splice(Math.floor(Math.random() * maxNumbers.length), 1)[0];
            if (!optionNumbers.includes(optionNumber)) {
                optionNumbers.push(optionNumber)
            }
        }
        
        setRandA(a)
        setRandB(b)

        setRandArray(shuffle(optionNumbers));
    }, [ setRight, setWrong ])

    useEffect(() => {
        (randA && randB) && synthSpeak({
            message: `${title} ${randA} plus ${randB}`,
            sounds: sounds && started
        })
    }, [ randA, randB, sounds, started ]);

    useEffect(() => {
        right && synthSpeak({
            status: "right",
            message: `${ selection } is equal to ${randA} plus ${randB}`,
            sounds: sounds && started
        })
    }, [ right, selection, randA, randB, sounds, started ]);

    useEffect(() => {
        wrong && synthSpeak({ status: "wrong", sounds: sounds && started })
    }, [ wrong, sounds, started ]);

    useEffect(() => {
        initialize();
    }, [ initialize ]);

    return (
        <Exercise title={ title } init={ initialize }>

            <p className="question">
                <span className="question__button question__button--primary">{ randA }</span>
                &#43; 
                <span className="question__button question__button--secondary">{ randB }</span>
            </p>

            <p className="options">
                {
                    randArray.map((num, i) => (
                        <button key={ i } className="options__button" type="button" onClick={ isEqual(num) }>{ num }</button>
                    ))
                }
            </p>

            <Status>
                { selection } <span className="font-bold">is</span> equal to { randA } plus { randB }
            </Status>
        </Exercise>
    );
};
