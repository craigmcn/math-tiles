import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useLocalStorage, useSessionStorage } from '../hooks/useBrowserStorage'

const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {
    const [ sounds, setSounds ] = useLocalStorage('sounds', false)
    const [ started, setStarted ] = useSessionStorage('started', false)
    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ right, setRight ] = useState(false)
    const [ wrong, setWrong ] = useState(false)

    const store = {
        sounds: [ sounds, setSounds ],
        started: [ started, setStarted ],
        menu: [ menuOpen, setMenuOpen ],
        right: [ right, setRight ],
        wrong: [ wrong, setWrong ],
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

StoreProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { StoreProvider as default, StoreContext }
