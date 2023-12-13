import React from 'react'

export default function HeaderCheckout() {
  return (
    <>
      <div className="w-full  py-8 flex items-center justify-between">
        <span className="text-zinc-400 text-base font-bold">Items</span>
        <div className="w-10 h-1 bg-zinc-400 rounded-md" />
        <span className="text-zinc-400 text-base font-bold">Entrega</span>
        <div className="w-10 h-1 bg-zinc-400 rounded-md" />
        <span className="text-zinc-400 text-base font-bold">Pagamento</span>
      </div>
    </>
  )
}
