import React, { useCallback, useContext, useEffect, useState } from "react";
import { shuffle, synthSpeak } from "../utils";
import { StoreContext } from '../store'
import { Exercise } from "./Exercise"
import { Status } from "./Status";

export const Between = () => {

    const {
        sounds: [ sounds ],
        started: [ started ],
        right: [ right, setRight ],
        wrong: [ wrong, setWrong ]
    } = useContext(StoreContext)

    const title = "Pick the number that is between"

    const [ randA, setRandA ] = useState(0)
    const [ randB, setRandB ] = useState(0)
    const [ randArray, setRandArray ] = useState([])
    const [ selection, setSelection ] = useState(0)

    const isBetween = num => () => {
        setSelection(num)
        setRight(num === randA + 1);
        setWrong(num !== randA + 1);
    }

    const initialize = useCallback(() => {
        setRight(false);
        setWrong(false);

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
    }, [ setRight, setWrong ]);

    useEffect(() => {
        (randA && randB) && synthSpeak({
            message: `${title} ${randA} and ${randB}`,
            sounds: sounds && started
        })
    }, [ randA, randB, sounds, started ]);

    useEffect(() => {
        (right && selection && randA && randB) && synthSpeak({
            status: "right",
            message: `${ selection } is between ${randA} and ${randB}`,
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
                <span className="question__button question__button--secondary">{ randB }</span>
            </p>

            <p className="options">
                {
                    randArray.map((num, i) => (
                        <button key={ i } className="options__button" type="button" onClick={ isBetween(num) }>{ num }</button>
                    ))
                }
            </p>

            <Status>
                { selection } <span className="font-bold">is</span> between { randA } and { randB }
            </Status>
        </Exercise>
    );
};
