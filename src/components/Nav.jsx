import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { IoEarthOutline, IoEarth } from "react-icons/io5";


function Nav() {
  const [swtch, setSwtch] = useState(false)
  // const [earth, setEarth] = useState(true)
  // const interval = setInterval(() => {
    // setEarth(!earth)
  // }, 1000)
  // console.log(earth);
  const navigate = useNavigate()

  function handleBurger() {
    setSwtch(!swtch)
  }

  return (
    <header className="p-4 dark:bg-gray-900 dark:text-zinc-300">
      <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8 text-[1.1rem]">
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <NavLink to='/countries/europe' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Europe</NavLink>
          </li>
          <li className="flex">
            <NavLink to='/countries/asia' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Asia</NavLink>
          </li>
          <li className="flex">
            <NavLink to='/countries/americas' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Americas</NavLink>
          </li>
        </ul>
        <NavLink to='/' rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
          {
            // earth ?
            <IoEarthOutline to='/' className='text-[2.5rem] dark:text-violet-400' />
            // : <IoEarth className='text-[2.5rem] dark:text-violet-400' />
          }
        </NavLink>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <NavLink to='/countries/africa' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Africa</NavLink>
          </li>
          <li className="flex">
            <NavLink to='/countries/oceania' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Oceania</NavLink>
          </li>
          <li className="flex">
            <NavLink to='/countries/antarctic' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Antarctic</NavLink>
          </li>
        </ul>
        <button onClick={handleBurger} title="Button" type="button" className="p-4 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`panel md:hidden ${swtch ? 'panelOpen' : ''}`}>
        <ul className="flex flex-col items-center gap-[15px] py-[10px]">
          <hr className='bg-white h-[1px] w-[50vw]' />
          <li><NavLink to='/countries/europe'>Europe</NavLink></li>
          <hr className='bg-white h-[1px] w-[50vw]' />
          <li><NavLink to='/countries/asia'>Asia</NavLink></li>
          <hr className='bg-white h-[1px] w-[50vw]' />
          <li><NavLink to='/countries/americas'>Americas</NavLink></li>
          <hr className='bg-white h-[1px] w-[50vw]' />
          <li><NavLink to='/countries/africa'>Africa</NavLink></li>
          <hr className='bg-white h-[1px] w-[50vw]' />
          <li><NavLink to='/countries/oceania'>Oceania</NavLink></li>
          <hr className='bg-white h-[1px] w-[50vw]' />
          <li><NavLink to='/countries/antarctic'>Antarctic</NavLink></li>
          <hr className='bg-white h-[1px] w-[50vw]' />
        </ul>
      </div>
    </header>
  )
}

export default Nav