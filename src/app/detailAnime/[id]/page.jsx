import { animeListApi } from '@/app/libraries/api-library'
import BackButton from '@/components/Navbar/BackButton'
import React from 'react'

const Page = async ({ params }) => {
    const id = await params
    const anime = await animeListApi({ resource: "anime", query: `${id}` })

    return (
        <div>
            <BackButton />
            <div className='m-2'>
                <h1>Halo ini halaman detail anime</h1>
                {/* <Image /> */}
            </div>
        </div>
    )
}

export default Page