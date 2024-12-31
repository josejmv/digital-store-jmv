// components
import { CartView } from '@/app/_components/organisms/cart-view/view'

// types
import type { NextPage } from 'next'

const CartPage: NextPage = () => (
  <article className='w-full max-w-screen-xl'>
    <CartView />
  </article>
)

export default CartPage
