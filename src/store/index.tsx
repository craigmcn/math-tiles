import React, { createContext, useState } from 'react'
import { useLocalStorage, useSessionStorage } from '../hooks/useBrowserStorage'

type StateTuple<T> = [T, React.Dispatch<React.SetStateAction<T>>]

type Store = {
    sounds: StateTuple<boolean>
    started: StateTuple<boolean>
    menu: StateTuple<boolean>
    right: StateTuple<boolean>
    wrong: StateTuple<boolean>
}

const StoreContext = createContext<Store>(null as unknown as Store)

const StoreProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [ sounds, setSounds ] = useLocalStorage<boolean>('sounds', false)
    const [ started, setStarted ] = useSessionStorage<boolean>('started', false)
    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ right, setRight ] = useState(false)
    const [ wrong, setWrong ] = useState(false)

    const store: Store = {
        sounds: [ sounds, setSounds ],
        started: [ started, setStarted ],
        menu: [ menuOpen, setMenuOpen ],
        right: [ right, setRight ],
        wrong: [ wrong, setWrong ],
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export { StoreProvider as default, StoreContext }
