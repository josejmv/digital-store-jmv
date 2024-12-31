// components
import Link from 'next/link'

// type
import type { FC, ReactNode } from 'react'

type CartLayoutProps = {
  children: ReactNode
}

const CartLayout: FC<CartLayoutProps> = ({ children }) => (
  <>
    <div className='flex justify-start w-full max-w-screen-xl px-4 mb-8'>
      <Link href='/'>
        <svg
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 inline-block mr-2'
        >
          <path
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M10 19l-7-7m0 0l7-7m-7 7h18'
          />
        </svg>
        Back To Catalog
      </Link>
    </div>
    {children}
  </>
)

export default CartLayout
