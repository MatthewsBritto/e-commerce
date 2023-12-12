import { CartItem } from '@/contexts/cart-context'
import { Trash } from 'lucide-react'

export default function ItemCart({
  productId,
  price,
  quantity,
  title,
}: CartItem) {
  return (
    <div className="border w-[95%] mx-auto p-1 rounded flex flex-col gap-2 mt-2">
      <div className="flex flex-col justify-between items-center mt-2">
        <h2 className="text-lg">{title}</h2>
        <div className="w-full flex justify-between px-2 items-center">
          <div className=" text-center p-2">
            <p>Quantidade:{quantity}</p>
            <p>Total Item: R${price * quantity}</p>
          </div>
          <button className="p-1 rounded bg-zinc-400">
            <Trash />
          </button>
        </div>
      </div>
    </div>
  )
}
