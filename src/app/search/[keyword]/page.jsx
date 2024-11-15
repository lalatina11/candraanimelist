import { animeListApi } from "@/app/libraries/api-library";
import AnimePopuler from "@/components/AnimePopuler";
import Header from "@/components/AnimePopuler/Header";

const Page = async ({params}) => {
    const {keyword} = await params
    const keywordFix = decodeURI(keyword)
    const searchAnime = await animeListApi({resource:"anime", query:`q=${keyword}`})
    return (
        <section className="px-2 mx-1">
            <Header title={`Search For ${keywordFix}...`} />
            <AnimePopuler api={searchAnime} />
        </section>
    );
}
export default Page