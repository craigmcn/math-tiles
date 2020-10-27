import React, { createContext, useState } from 'react'
import { useLocalStorage, useSessionStorage } from "../hooks/useBrowserStorage"

export const StoreContext = createContext(null)

export default ({ children }) => {

  const  [ sounds, setSounds ] = useLocalStorage("sounds", false)
  const  [ started, setStarted ] = useSessionStorage("started", false)
  const  [ right, setRight ] = useState(false)
  const  [ wrong, setWrong ] = useState(false)

  const store = {
    sounds: [sounds, setSounds],
    started: [started, setStarted],
    right: [right, setRight],
    wrong: [wrong, setWrong],
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}