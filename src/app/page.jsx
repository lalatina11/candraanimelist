import AnimePopuler from "@/components/AnimePopuler";
import Header from "@/components/AnimePopuler/Header";
import { animeListApi } from "@/app/libraries/api-library"

const Page = async () => {
  const animeHome = await animeListApi({ resource: "top/anime", query: "limit=15" })

  return (
    <section className="px-2 mx-1">
      <Header title="Anime Terpopuler 2024 🔥" Linkhref="/populer" LinkTitle="More..." />
      <AnimePopuler api={animeHome} />
    </section>
  );
}
export default Page