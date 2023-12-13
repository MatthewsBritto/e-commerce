import React from 'react'
import ItemCart from '../item-cart'
import { FaArrowRight } from 'react-icons/fa'

export default function CheckItems() {
  return (
    <div className="w-full flex flex-col items-center gap-4 text-white  overflow-y-scroll">
      <div className=" w-full flex flex-col max-h-[500px]">
        <ItemCart
          image="/espiral.png"
          price={69.9}
          productId={1}
          title="Espiral"
          key={1}
          quantity={1}
        />
        <ItemCart
          image="/espiral.png"
          price={69.9}
          productId={1}
          title="Espiral"
          key={1}
          quantity={1}
        />
      </div>
      <button className="flex items-center gap-4 justify-center font-bold text-xl p-4 w-[98%] rounded-md bg-blueBorder text-orangeDark">
        Entrega
        <FaArrowRight />
      </button>
    </div>
  )
}
