import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { StoreContext } from '../store'

const Status = (props) => {
    const { children } = props

    const {
        right: [ right ],
        wrong: [ wrong ],
    } = useContext(StoreContext)

    return (
        <p className="status-text">
            {
                (!right && !wrong) && 'What do you think?'

            }
            { right &&
                <Fragment>
                    <span className="font-bold text-green-800">✔ Correct!</span> { children }
                </Fragment>
            }
            { wrong && <span className="text-purple-900">Not quite. Try again. <span role="img" aria-hidden="true">👍</span></span> }
        </p>

    )
}

Status.propTypes = {
    children: PropTypes.node,
}

export { Status }
