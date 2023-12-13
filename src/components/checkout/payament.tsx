import React from 'react'

import { CreditCard, Landmark, SmartphoneNfc } from 'lucide-react'
import InputForm from '@/components/input-form'

export default function Payament() {
  return (
    <div className="w-full flex flex-col gap-8 ">
      <div className="flex gap-2 w-full">
        <div className="w-[33%] p-2 border border-zinc-400 text-center rounded-md flex items-center justify-center gap-2 flex-col">
          <CreditCard />
          <h2>Crédito</h2>
        </div>
        <div className="w-[33%] p-2 border border-zinc-400 text-center rounded-md flex items-center justify-center gap-2 flex-col">
          <SmartphoneNfc />
          <h2>Pix</h2>
        </div>
        <div className="w-[33%] p-2 border border-zinc-400 text-center rounded-md flex flex-col items-center justify-center gap-2">
          <Landmark />
          <h2>Transferencia</h2>
        </div>
      </div>
      <form className="p-2 flex flex-col gap-4 font-semibold">
        <InputForm
          title="N. Cartao"
          type="text"
          placeholder="0000 0000 0000 0000"
          card
        />

        <div className="w-full grid grid-cols-2 gap-8">
          <InputForm title="Vencimento" type="text" placeholder=" MM/YYYY" />
          <InputForm title="CVC" type="text" placeholder="000" />
        </div>
        <InputForm title="Pais" type="text" placeholder="Malasia" />

        <button className="p-4 mt-2 font-bold w-full bg-blueBorder rounded-md">
          Pagamento
        </button>
      </form>
    </div>
  )
}
