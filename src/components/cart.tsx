'use client'
import React, { ReactNode, useContext, useState } from 'react'
import { Trash, ArrowRight } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'
import ItemCart from './item-cart'

export default function CartCheckout() {
  const { items, activeCart, changeCartState } = useCart()

  return (
    <div
      className={`${
        activeCart ? 'absolute' : 'hidden'
      } right-0 z-50 w-2/3 md:w-1/2 top-0 h-full bg-red-700 flex flex-col text-white`}
    >
      <div className="flex w-full justify-between items-center bg-orangeDark px-2 py-6">
        <h2 className="text-xl font-bold py-2">Carrinho</h2>
        <ArrowRight onClick={changeCartState} />
      </div>
      {items.map((item) => {
        return (
          <ItemCart
            productId={item.productId}
            key={item.productId}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
          />
        )
      })}
    </div>
  )
}
