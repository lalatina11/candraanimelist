import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AnimePopuler = ({ api }) => {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-2 md:gap-3 gap-4">
            {api.data?.map((data) => {
                const title = data.title
                return (
                    <div key={data.mal_id} className="shadow-md shadow-amber-700 mb-5 hover:bg-amber-500 hover:text-black rounded-md">
                        <Link href={`/detailAnime/${data.mal_id}`} id={data.mal_id}>
                            <Image id="imageAnimeList" className="object-cover h-auto" src={data.images.webp.image_url} alt="..." width={350} height={350} priority={true} />
                            <h3 className="flex justify-center items-center text-xl font-bold py-1 px-2">{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AnimePopuler