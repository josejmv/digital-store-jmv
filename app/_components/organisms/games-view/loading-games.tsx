import type { FC } from 'react'

export const LoadingGames: FC = () =>
  [...Array(6)].map((_, idx) => (
    <div key={idx} className='animate-pulse'>
      <div className='h-48 bg-gray-300 rounded' />
      <div className='mt-2 h-4 bg-gray-300 rounded' />
      <div className='mt-2 h-4 bg-gray-300 rounded' />
    </div>
  ))
