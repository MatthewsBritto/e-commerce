'use client'
import { CartItem, useCart } from '@/contexts/cart-context'
import { Plus, Minus } from 'lucide-react'
import Image from 'next/image'

export default function ItemCart({
  productId,
  price,
  quantity,
  title,
  image,
}: CartItem) {
  const { addToCart } = useCart()
  return (
    <div className="w-[98%] mx-auto p-1 rounded flex mt-2 items-end gap-2 bg-orangeDark shadow-md">
      <div>
        <Image
          src={image}
          alt=""
          width={100}
          height={50}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col h-full w-[75%] justify-between  ">
        <div className="flex w-full justify-between py-2 text-sm">
          <h2 className="">{title}</h2>
          <span className="pr-1">R$ {price * quantity}</span>
        </div>
        <div className="w-1/2 h-6 grid grid-cols-3 text-center rounded-sm text-lg items-center mb-1">
          <button
            className=" p-1 h-full bg-zinc-500 rounded-l-md flex items-center justify-center border-r-0 "
            disabled={quantity === 0}
            onClick={() => addToCart(productId, '-')}
          >
            <Minus size={17} />
          </button>
          <p className="bg-zinc-400 text-base h-full flex items-center justify-center ">
            {quantity}
          </p>
          <div
            className=" p-1 bg-zinc-500 rounded-r-md flex items-center justify-center border-l-0 h-full"
            onClick={() => addToCart(productId, '+')}
          >
            <Plus size={17} />
          </div>
        </div>
      </div>
    </div>
  )
}
