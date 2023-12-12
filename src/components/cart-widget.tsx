'use client'

import { ShoppingBag } from 'lucide-react'

import { useCart } from '@/contexts/cart-context'

export function CartWidget() {
  const { items, changeCartState } = useCart()

  return (
    <div className="flex items-center gap-2" onClick={changeCartState}>
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Carrinho ({items.length})</span>
    </div>
  )
}
