"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useRef } from 'react'

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleBtnInput = (event) => {
        let keyword = searchRef.current.value
        if (keyword.length < 2 || keyword.trim() == "") { return }
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
            searchRef.current.value = ''
        }
    }


    return (
        <div className="flex flex-row">
            <input type="text" placeholder="Search Anime..." className="py-1 px-2 rounded-lg placeholder:text-amber-200 lg:text-base md:text-xl sm:text-2xl text-amber-300 bg-amber-950 border border-amber-400 hover:bg-amber-300 hover:text-black hover:placeholder:text-black hover:border-black transition-all duration-300" ref={searchRef} onKeyDown={handleBtnInput} />
            <button className="px-2 py-1 border rounded mx-2 border-amber-400 lg:text-base md:text-xl sm:text-2xl text-amber-200 transition-all duration-300 hover:text-black hover:bg-amber-300 hover:border-black" onClick={handleBtnInput}>↲</button>
        </div>
    )
}

export default InputSearch