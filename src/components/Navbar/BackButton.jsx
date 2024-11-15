"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {
    let router = useRouter()
    const handleBack = (event) => {
        if (event.type === "click"){
            event.preventDefault()
            router.back()
        }
    }

    return (
        <button className="m-2 border border-amber-500 text-amber-400 py-1 px-2 text-xl font-bold rounded-md hover:text-black hover:bg-amber-400 transition-all duration-300" onClick={handleBack}>↩ Back</button>
    )
}

export default BackButton