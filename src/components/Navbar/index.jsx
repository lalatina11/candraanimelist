"use client"
import Link from 'next/link'
import React from 'react'
import InputSearch from './InputSearch'
import UserLogInOff from './UserLogInOut'

const Navbar = () => {
    return (
        <header className="flex flex-col">
            <div className="flex lg:justify-between md:justify-between flex-col bg-amber-950 m-2 p-2 py-3 rounded sm:gap-4 lg:flex-row md:flex-row lg:items-center md:items-center">
                <Link className="lg:text-3xl md:text-3xl sm:text-4xl text-amber-300 md:w-1/3 sm:w-2/5 p-1 font-bold rounded hover:scale-y-110 transition-all duration-300" href="/">Candra Anime List</Link>
                <InputSearch/>
            </div>
            <div className="bg-amber-950 m-2 p-2 py-3 rounded">
                <UserLogInOff/>
            </div>
        </header>
    )
}

export default Navbar