import React, { useCallback, useContext, useEffect, useState } from "react";
import { synthSpeak } from "../utils";
import { StoreContext } from '../store'
import { Exercise } from "./Exercise"
import { Status } from "./Status";

export const Higher = () => {

    const {
        sounds: [ sounds ],
        started: [ started ],
        right: [ right, setRight ],
        wrong: [ wrong, setWrong ]
    } = useContext(StoreContext)

    const title = "Pick the higher number"

    const [ randA, setRandA ] = useState(0)
    const [ randB, setRandB ] = useState(0)
    const [ randArray, setRandArray ] = useState([])

    const isHigherA = () => {
        setRight(randA > randB);
        setWrong(randA < randB);
    }

    const isHigherB = () => {
        setRight(randB > randA);
        setWrong(randB < randA);
    }

    const initialize = useCallback(() => {
        setRight(false);
        setWrong(false);

        const numbers = Array.from(Array(12), (_, i) => i + 1);

        const a = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
        const b = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
        
        setRandA(a)
        setRandB(b)

        setRandArray([a, b].sort((a, b) => a - b));
    }, [ setRight, setWrong ])

    useEffect(() => {
        (randA && randB) && synthSpeak({
            message: `${title}, ${randA} or ${randB}`,
            sounds: sounds && started
        })
    }, [ randA, randB, sounds, started ]);

    useEffect(() => {
        (right && randArray.length) && synthSpeak({
            status: "right",
            message: `${ randArray[1] } is higher than ${ randArray[0] }`,
            sounds: sounds && started
        })
    }, [ right, randArray, sounds, started ]);

    useEffect(() => {
        wrong && synthSpeak({ status: "wrong", sounds: sounds && started })
    }, [ wrong, sounds, started ]);

    useEffect(() => {
        initialize();
    }, [ initialize ]);

    return (
        <Exercise title={ title } init={ initialize }>
            <p className="question question--no-buttons">
                <button className="question__button question__button--primary" type="button" onClick={ isHigherA }>{ randA }</button>
                <button className="question__button question__button--secondary" type="button" onClick={ isHigherB }>{ randB }</button>
            </p>

            <Status>
                { randArray[1] } <span className="font-bold">is</span> higher than { randArray[0] }
            </Status>
        </Exercise>
    );
};
