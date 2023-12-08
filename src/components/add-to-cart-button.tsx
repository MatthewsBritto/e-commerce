'use client'

import { useCart } from '@/contexts/cart-context'

export interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-4 md:mt-8 flex h-12 items-center justify-center rounded-md bg-orangeDark font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
