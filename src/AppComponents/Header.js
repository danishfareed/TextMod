import React from 'react'
import PropTypes from 'prop-types'
import Usedarkmode from '../AppHooks/Usedarkmode'
import { Link } from 'react-router-dom'

export const Header = (props) => {

    const [colorTheme, setTheme] = Usedarkmode()
    return (
        <>  
            <header className="bg-white dark:bg-slate-900 text-gray-600 body-font dark:text-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl dark:text-white">{props.title}</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                {/* <Link to="/how-it-works" className="mr-5">How it works?</Link> */}
                <a href="#" className="mr-5">Buy me a coffe</a>
                {/* <Link to="/other-tools" className="mr-5">Other Tools</Link> */}
                <span onClick={ () =>setTheme(colorTheme)} className="w-10 h-10  rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center dark:bg-slate-800" >
                    {colorTheme === "light" ?
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>

                    }
                </span>
                </nav>
            </div>
            </header>

        </>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}