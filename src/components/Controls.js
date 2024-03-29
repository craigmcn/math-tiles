import React from 'react'
import PropTypes from 'prop-types'
import { NextExercise } from './NextExercise'

const Controls = ({ init }) => (
    <div className="flex justify-center content-center lg:block text-xl lg:text-3xl">
        <p className="">
            <button className="bg-yellow-800 hover:bg-yellow-700 text-yellow-200 hover:text-yellow-100 font-bold py-2 px-4 rounded shadow" type="button" onClick={ init }>Try new numbers</button>
        </p>

        <NextExercise />
    </div>
)

Controls.propTypes = {
    init: PropTypes.func.isRequired,
}

export { Controls }
