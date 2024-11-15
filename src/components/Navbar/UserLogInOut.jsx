"use client"
import Link from 'next/link'
import React from 'react'

const UserLogInOut = () => {
    return (
        <div className="flex justify-between items-center text-amber-400">
            <Link href="/user/signin" className="px-1 rounded hover:text-black hover:bg-amber-500 transition-all duration-300">Log In</Link>
            <Link href="/user/signout" className="px-1 rounded hover:text-black hover:bg-amber-500 transition-all duration-300">Log Out</Link>
        </div>
    )
}

export default UserLogInOut