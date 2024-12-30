// components
import Image from 'next/image'
import Link from 'next/link'

// types
import type { FC } from 'react'

export const Footer: FC = () => (
  <footer className='w-full h-44 bg-secondary-content flex justify-center items-center'>
    <Link href='/'>
      <Image
        width={170}
        height={44}
        src='/ad-logo.svg'
        alt='Apply Digital Logo'
      />
    </Link>
  </footer>
)
