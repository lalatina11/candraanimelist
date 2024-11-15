"use client"
import AnimePopuler from "@/components/AnimePopuler";
import HeaderPage from "@/utilities/HeaderPage";
import PaginationBtn from "@/utilities/PaginationBtn";
import { useEffect, useState } from "react";
import { animeListApi } from "../libraries/api-library";

const Page = () => {
    const [page, setPage] = useState(1)
    const [animePopuler, setAnimePopuler] = useState([])

    const fetchingData = async () => {
        const data = await animeListApi({ resource: "top/anime" })
        setAnimePopuler(data)
    }

    useEffect(() => {
        fetchingData()
    }, [page])

    const lastPage = animePopuler.pagination?.last_visible_page


    return (
        <section className="flex flex-col gap-4 px-2 mx-1 mb-5">
            <HeaderPage halaman={`All Anime Popular #${page}`} />
            <AnimePopuler api={animePopuler} />
            <PaginationBtn page={page} lastPage={lastPage} setPage={setPage} />
        </section>
    );
}
export default Page