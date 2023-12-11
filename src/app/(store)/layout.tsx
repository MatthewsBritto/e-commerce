import { ReactNode } from 'react'

import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'
import Circle from '@/components/circle'
import Footer from '@/components/footer'
import Image from 'next/image'
import Teste from '@/../public/teste.svg'
import Pink from '@/../public/pink.svg'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="overflow-hidden md:mx-auto md:grid h-[800px] md:h-screen  w-full max-w-[1600px] md:grid-rows-app md:gap-16 px-8 py-8 ">
        <Header />
        {children}
      </div>
      <Footer />
    </CartProvider>
  )
}
