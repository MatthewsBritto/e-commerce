'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import Logo from '../../public/Logo.png'

import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'
import { useCart } from '@/contexts/cart-context'
import { useUser } from '@/contexts/user-context'

export function Header() {
  const [activeMenu, setActiveMenu] = useState(false)
  const { changeCartState } = useCart()
  const { changeModalLoginState } = useUser()

  return (
    <div className="flex items-center justify-between max-w-[1000px] m-auto w-full overflow-hidden">
      <div className="flex items-center justify-center h-full md:hidden">
        <Menu size={40} onClick={() => setActiveMenu(true)} />
      </div>
      <div
        className={`${activeMenu ? 'flex' : 'hidden'}
        } fixed bg-background w-full h-screen items-center justify-center top-0 left-0 z-50 md:hidden`}
      >
        <div className="absolute top-5 left-5 ">
          <X size={40} onClick={() => setActiveMenu(false)} />
        </div>
        <div className="text-2xl flex flex-col gap-8 font-bold">
          <Link href="/" onClick={() => setActiveMenu(false)}>
            <h2>Home</h2>
          </Link>
          <h2 onClick={changeCartState}>Compras</h2>
          <Link href="/auth" onClick={() => setActiveMenu(false)}>
            <h2>Perfil</h2>
          </Link>
          <h2>Catalogo</h2>
          <h2>Contato</h2>
        </div>
      </div>
      <div className="flex items-center justify-center md:gap-8 ">
        <Link href="/" className="text-2xl font-extrabold text-orangeDark ">
          <Image
            className="w-30"
            src={Logo}
            alt=""
            quality={100}
            width={93}
            height={29}
          />
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-orangeDark"></div>
        <button onClick={() => changeModalLoginState(true)}>
          <span className="text-sm">Conta</span>
        </button>
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <Image
            src="https://github.com/diego3g.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
