import React, { useCallback, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../store'

export const Menu = () => {
    const {
        sounds: [ sounds, setSounds ],
        started: [ started, setStarted ],
        menu: [ menuOpen, setMenuOpen ],
    } = useContext(StoreContext)

    const closeMenu = useCallback(() => {
        setMenuOpen(false)
    }, [ setMenuOpen ])

    const toggleSounds = () => {
        setSounds(!sounds)
        closeMenu()
    }

    useEffect(() => {
        setStarted(true)
    }, [ sounds, setStarted ])

    useEffect(() => {
        document.body.addEventListener('click', closeMenu)

        return () => {
            window.removeEventListener('click', closeMenu)
        }
    }, [ closeMenu ])

    return (
        <nav className={ `${menuOpen ? 'translate-x-0' : '-translate-x-full'} transform top-0 left-0 w-64 bg-gray-100 border-r border-gray-300 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30` } onClick={ closeMenu }>
            <div className="flex items-center flex-shrink-0 justify-between bg-gray-300 p-2">
                <h1 className="font-bold text-2xl">Math Tiles</h1>

                <button className="flex items-center bg-gray-100 hover:text-blue-900 hover:bg-blue-100 px-2 py-1 border rounded relative" onClick={ closeMenu }>
                    <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <title>Close</title>
                        <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />
                    </svg>
                </button>
            </div>

            <div className="pt-4 px-2">

                <h2 className="uppercase">Exercises</h2>

                <ul className="menu">

                    <Link className="menu__item" to="/higher" onClick={ closeMenu }>Higher</Link>

                    <Link className="menu__item" to="/lower" onClick={ closeMenu }>Lower</Link>

                    <Link className="menu__item" to="/one-more" onClick={ closeMenu }>One more</Link>

                    <Link className="menu__item" to="/one-less" onClick={ closeMenu }>One less</Link>

                    <Link className="menu__item" to="/between" onClick={ closeMenu }>Between</Link>

                    <Link className="menu__item" to="/add" onClick={ closeMenu }>Add</Link>

                    <Link className="menu__item" to="/subtract" onClick={ closeMenu }>Subtract</Link>

                </ul>
            </div>

            <div className="border-t mt-4 pt-4 px-2">

                <h2 className="uppercase">Settings</h2>

                <button className="flex items-center mt-4 lg:mt-0 px-1 py-2" onClick={ toggleSounds }>
                    { /* FontAwesome 5 - Volume mute - light */
                        (!sounds || !started) &&
                        <svg className="fill-current h-4 w-4" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <title>Sound is off - click to turn sound on</title>
                            <path d="M454.63 256l55.03-55.03c3.12-3.12 3.12-8.19 0-11.31l-11.31-11.31c-3.12-3.12-8.19-3.12-11.31 0L432 233.37l-55.03-55.03c-3.12-3.12-8.19-3.12-11.31 0l-11.31 11.31c-3.12 3.12-3.12 8.19 0 11.31L409.37 256l-55.03 55.03c-3.12 3.12-3.12 8.19 0 11.31l11.31 11.31c3.12 3.12 8.19 3.12 11.31 0L432 278.63l55.03 55.03c3.12 3.12 8.19 3.12 11.31 0l11.31-11.31c3.12-3.12 3.12-8.19 0-11.31L454.63 256zM231.81 64c-5.91 0-11.92 2.18-16.78 7.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c4.87 4.87 10.88 7.05 16.78 7.05 12.33 0 24.19-9.52 24.19-24.02V88.02C256 73.51 244.13 64 231.81 64zM224 404.67l-75.32-75.3-9.37-9.37H32V192h107.31l9.37-9.37 75.32-75.3v297.34z"></path>
                        </svg>
                    }
                    { /* FontAwesome 5 - Volume - light */
                        (sounds && started) &&
                        <svg className="fill-current h-4 w-4 text-green-800" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg">
                            <title>Sound is on - click to turn sound off</title>
                            <path d="M342.91 193.57c-7.81-3.8-17.5-.48-21.34 7.5-3.81 7.97-.44 17.53 7.53 21.34C343.22 229.2 352 242.06 352 256c0 13.94-8.78 26.8-22.9 33.58-7.97 3.81-11.34 13.38-7.53 21.34 3.86 8.05 13.54 11.29 21.34 7.5C368.25 306.28 384 282.36 384 256s-15.75-50.29-41.09-62.43zM231.81 64c-5.91 0-11.92 2.18-16.78 7.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c4.87 4.87 10.88 7.05 16.78 7.05 12.33 0 24.19-9.52 24.19-24.02V88.02C256 73.51 244.13 64 231.81 64zM224 404.67L139.31 320H32V192h107.31L224 107.33v297.34zm256-148.68c0-66.12-34.02-126.62-88.81-157.87-7.69-4.38-17.59-1.78-22.04 5.89-4.45 7.66-1.77 17.44 5.96 21.86 44.77 25.55 72.61 75.4 72.61 130.12s-27.84 104.58-72.61 130.12c-7.72 4.42-10.4 14.2-5.96 21.86 4.3 7.38 14.06 10.44 22.04 5.89C445.98 382.62 480 322.12 480 255.99z"></path>
                        </svg>
                    }
                    <span className="pl-4">
                        { (!sounds || !started) && 'Turn sound on' }
                        { (sounds && started) && 'Turn sound off' }
                    </span>
                </button>
            </div>
        </nav>
    )
}
