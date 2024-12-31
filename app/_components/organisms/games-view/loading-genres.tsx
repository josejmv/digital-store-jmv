import type { FC } from 'react'

export const LoadingGenres: FC = () =>
  [...Array(6)].map((_, idx) => (
    <div key={idx} className='animate-pulse'>
      <div className='mt-2 h-4 bg-gray-300 rounded' />
    </div>
  ))
