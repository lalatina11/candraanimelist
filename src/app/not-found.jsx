"use client"
import BackButton from '@/components/Navbar/BackButton'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
    return (
        <div className="">
            <BackButton/>
            <h1 className="flex justify-center items-center text-5xl mt-36">
                404 Not Found Page!
            </h1>
            <div className="flex justify-center items-center mt-10">
                <div className="custom-loader"></div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <Link href="/" className="border border-amber-500 py-1 px-2 text-xl rounded-xl hover:bg-amber-500 hover:text-black transition-all duration-300">Back To Home</Link>
            </div>
        </div>
    )
}

export default notFound