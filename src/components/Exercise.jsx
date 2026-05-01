import React from 'react'
import PropTypes from 'prop-types'
import { Controls } from './Controls'

const Exercise = (props) => {
    const { title, init, children } = props

    return (
        <div className="text-center mt-8 sm:mt-3">
            <h1 className="text-3xl md:text-4xl lg:text-6xl">{ title }</h1>

            { children }

            <Controls init={ init } />
        </div>
    )
}

Exercise.propTypes = {
    title: PropTypes.string.isRequired,
    init: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export { Exercise }
