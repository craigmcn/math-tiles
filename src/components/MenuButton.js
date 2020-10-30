import React, { useContext } from "react";
import { StoreContext } from '../store'

export const MenuButton = () => {

    const { menu: [ menuOpen, setMenuOpen ] } = useContext(StoreContext);

    const openMenu = () => {
        setMenuOpen(true)
    }

    return (
        <div className={ `${ menuOpen ? "hidden" : "block" } absolute top-1 left-1` }>
            <button className="flex items-center px-2 py-1 border rounded hover:bg-gray-200 hover:text-gray-900" onClick={ openMenu }>
                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <title>Menu</title>
                    <path fill="currentColor" d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z" />
                </svg>
            </button>
        </div>
    );
};
