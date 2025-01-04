// components
import Image from 'next/image'
import Link from 'next/link'

// types
import type { FC } from 'react'

export const Header: FC = () => (
  <header className='w-full bg-secondary flex justify-center'>
    <section className='max-w-screen-xl w-full flex justify-between items-center px-4 md:px-8 py-4'>
      <Link href='/'>
        <Image
          width={170}
          height={20}
          className='w-28 h-1w-28'
          src='/ad-logo-black.svg'
          alt='Apply Digital Logo'
        />
      </Link>
      <Link href='/cart'>
        <Image width={20} height={20} alt='Cart Logo' src='/icons/cart.svg' />
      </Link>
    </section>
  </header>
)
