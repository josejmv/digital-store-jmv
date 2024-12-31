// components
import { GamesView } from '@/app/_components/organisms/games-view/view'

// types
import type { SearchParamsDataType } from '@/app/_types'
import type { NextPage } from 'next'

type HomePageProps = {
  searchParams: Promise<SearchParamsDataType>
}

const HomePage: NextPage<HomePageProps> = async (props) => {
  const searchParams = await props.searchParams

  return (
    <article className='w-full max-w-screen-xl'>
      <h1 className='font-bold text-4xl'>Top sellers</h1>

      <GamesView params={searchParams} />
    </article>
  )
}

export default HomePage
