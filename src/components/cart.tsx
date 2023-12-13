'use client'
import { Trash, ArrowRight } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'
import ItemCart from './item-cart'

export default function CartCheckout() {
  const { items, activeCart, changeCartState } = useCart()

  return (
    <div
      className={`${
        activeCart ? 'absolute' : 'hidden'
      } right-0 z-50 w-3/4 md:w-1/2 top-0 h-full bg-backgroundYellow flex flex-col text-white justify-between overflow-hidden animate-slide transition-all`}
    >
      <div className="flex w-full justify-between items-center bg-orangeDark px-2 py-6">
        <h2 className="text-xl font-bold py-2">Carrinho</h2>
        <ArrowRight onClick={changeCartState} />
      </div>
      <div className="w-full flex flex-1 flex-col">
        {items.map((item) => {
          return (
            <ItemCart
              productId={item.productId}
              key={item.productId}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              image={item.image}
            />
          )
        })}
      </div>
      <button className="bg-green-500 text-white p-4 font-bold text-xl">
        Pagamento
      </button>
    </div>
  )
}
