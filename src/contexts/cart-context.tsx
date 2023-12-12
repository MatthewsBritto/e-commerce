'use client'

import { GET } from '@/app/api/products/route'
import { Product } from '@/data/types/product'
import { ReactNode, createContext, useContext, useState } from 'react'

export interface CartItem {
  productId: number
  title: string
  price: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
  setItensOnCart: (id: number) => void
  changeCartState: () => void
  activeCart: boolean
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [activeCart, setActiveCart] = useState(false)

  async function addToCart(productId: number) {
    const product = await setItensOnCart(productId)

    if (!product) {
      return
    }

    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [
          ...state,
          {
            productId,
            title: product[0].title,
            price: product[0].price,
            quantity: 1,
          },
        ]
      }
    })
  }

  async function setItensOnCart(id: number) {
    let products: Product[]

    await GET().then((res) =>
      res.json().then((resolve) => (products = resolve)),
    )

    if (products) {
      const res = products.filter((product) => product.id === id)
      return res
    }
  }

  function changeCartState() {
    setActiveCart(!activeCart)
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
        setItensOnCart,
        changeCartState,
        activeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
