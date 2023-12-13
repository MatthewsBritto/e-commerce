import { ReactNode } from 'react'

import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'

import Footer from '@/components/footer'
import CartCheckout from '@/components/cart'
import { UserProvider } from '@/contexts/user-context'
import ModalSignin from '@/components/modal-sign-in'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <UserProvider>
        <div className=" md:mx-auto md:grid h-[800px] md:h-screen  w-full max-w-[1600px] md:grid-rows-app md:gap-16 px-8 py-8 transition-all ">
          <Header />
          {children}
          <CartCheckout />
          <ModalSignin />
        </div>
      </UserProvider>
      <Footer />
    </CartProvider>
  )
}
