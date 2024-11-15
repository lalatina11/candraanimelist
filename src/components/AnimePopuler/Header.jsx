import Link from 'next/link'
import React from 'react'

const Header = ({title, Linkhref, LinkTitle}) => {
    return (
        <div className="text-2xl font-bold my-4 flex justify-between items-center">
            <h1>{title}</h1>
            {Linkhref && LinkTitle ?
            <Link href={Linkhref} className="text-lg font-semibold hover:text-amber-400 hover:scale-x-105 hover:underline transition-all duration-200">{LinkTitle}</Link>
            :null}
        </div>
    )
}

export default Header