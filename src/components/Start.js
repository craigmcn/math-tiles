import React, { useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { StoreContext } from '../store'
import { exercises } from '../utils'

export const Start = () => {
    const { started: [ , setStarted ] } = useContext(StoreContext)

    const history = useHistory()

    const start = useCallback(() => {
        setStarted(true)

        const exercise = exercises[Math.floor(Math.random() * exercises.length)]
        history.push(`/${exercise}`)
    }, [ setStarted, history ])

    return (
        <div className="flex justify-center mt-16">
            <button className="text-5xl text-green-100 hover:text-green-200 bg-green-700 hover:bg-green-800 font-bold px-8 py-4 rounded shadow" type="button" onClick={ start }>Start</button>
        </div>
    )
}
