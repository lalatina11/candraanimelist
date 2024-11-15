import React from 'react'

export const animeListApi = async({resource,query}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const AnimeList = await response.json()
    return AnimeList
}

