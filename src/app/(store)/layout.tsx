import { ReactNode } from 'react'

import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'
import Circle from '@/components/circle'
import Footer from '@/components/footer'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="md:mx-auto md:grid min-h-screen w-full max-w-[1600px] md:grid-rows-app md:gap-5 px-8 py-8">
        <Circle className="absolute bottom-0 left-20 w-72 h-72 rounded-full bg-backgroundYellow/80 justify-center  items-center flex animate-slide-top">
          <Circle className="w-56 h-56 rounded-full bg-orangeDark/80 " />
        </Circle>
        <Circle className="absolute top-48 right-20 w-72 h-72 rounded-full bg-backgroundYellow/80 justify-center  items-center flex animate-slide-top-reverse">
          <Circle className="w-56 h-56 rounded-full bg-orangeDark/80 " />
        </Circle>
        <Header />
        {children}
      </div>
      <Footer />
    </CartProvider>
  )
}
