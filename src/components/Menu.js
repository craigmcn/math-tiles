import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from '../store'

export const Menu = () => {

    const {
        sounds: [ sounds, setSounds ],
        started: [ started, setStarted ]
    } = useContext(StoreContext)
    const [ menuOpen, setMenuOpen ] = useState(false);
  
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    const toggleSounds = () => {
        setSounds(!sounds)
        closeMenu()
    }

    useEffect(() => {
        setStarted(true)
    }, [ sounds, setStarted ])

    return (
        <nav className="flex items-center flex-wrap px-2 md:px-6 py-2">
            <div className="flex items-center flex-shrink-0 mr-6">
                <span className="font-semibold text-xl tracking-tight">Math Tiles</span>
            </div>
            <div className="lg:hidden ml-auto">
                <button className="flex items-center px-3 py-2 border rounded" onClick={ toggleMenu }>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className={ `w-full ${ menuOpen ? "block" : "hidden" } flex-grow lg:flex lg:items-center lg:w-auto` }>
                <div className="menu">
                
                    <Link className="menu__item" to="/higher" onClick={ closeMenu }>Higher</Link>

                    <Link className="menu__item" to="/one-more" onClick={ closeMenu }>One more</Link>
                    
                    <Link className="menu__item" to="/one-less" onClick={ closeMenu }>One less</Link>
                    
                    <Link className="menu__item" to="/between" onClick={ closeMenu }>Between</Link>
                    
                    <Link className="menu__item" to="/add" onClick={ closeMenu }>Add</Link>
                    
                    <Link className="menu__item" to="/subtract" onClick={ closeMenu }>Subtract</Link>

                </div>
                
                <button className="mt-2 lg:mt-0 px-3 py-2 border rounded" onClick={ toggleSounds }>
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
                </button>
            </div>
        </nav>
    );
};
