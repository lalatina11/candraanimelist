"use client"
import React from 'react'

const PaginationBtn = ({ page, lastPage, setPage }) => {
    const scrollUp = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleFirst = () => {
        setPage(page = (page * 0) + 1)
        scrollUp()
    }

    const handleLast = () => {
        setPage(page = (page * 0) + lastPage)
        scrollUp()
    }

    const handleNext = () => {
        setPage(page = page + 1)
        scrollUp()
    }

    const handlePrev = () => {
        setPage(page - 1)
        scrollUp()
    }


    return (
        <div className="flex justify-center items-center gap-4">
            {page > 1 ?
                <div className='flex justify-center items-center gap-4'>
                    <button onClick={handleFirst} className='border border-amber-500 px-1 rounded hover:bg-amber-500 hover:text-black transition-all duration-300'>First</button>
                    <button onClick={handlePrev} className='border border-amber-500 px-1 rounded hover:bg-amber-500 hover:text-black transition-all duration-300'>Prev</button>
                </div>
                : null}
            <p>{page}/{lastPage}</p>
            {page < lastPage ? (
                <div className='flex justify-center items-center gap-4'>
                    <button onClick={handleNext} className='border border-amber-500 px-1 rounded hover:bg-amber-500 hover:text-black transition-all duration-300'>Next</button>
                    <button onClick={handleLast} className='border border-amber-500 px-1 rounded hover:bg-amber-500 hover:text-black transition-all duration-300'>Last</button>
                </div>
            )
                : null}
        </div>
    )
}

export default PaginationBtn