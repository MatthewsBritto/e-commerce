import React from 'react'
import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-orangeDark flex items-center justify-center  p-2 text-white flex-wrap ">
      <div className="grid grid-cols-3 justify-between gap-2 md:gap-32">
        <div>
          <h2 className="text-md font-bold text-center py-1 md:text-lg">
            Endereço
          </h2>
          <p className="text-xs md:text-base">Rua Juruá 891</p>
          <p className="text-xs md:text-base">Ribeirão Preto - SP</p>
        </div>
        <div className="text-center">
          <h2 className="text-md font-bold py-1 md:text-lg">Telefone</h2>
          <p className="text-xs md:text-base">(16)4002-8922</p>
          <p className="text-xs md:text-base">(16)4002-8922</p>
        </div>
        <div>
          <h2 className="text-md font-bold text-center py-1 md:text-lg">
            Social
          </h2>
          <div className="flex gap-2 justify-center">
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>
      <div className="w-[100%] flex flex-col items-center justify-end py-4">
        <h2>Todos os direitos reservados.</h2>
        <h2> MBritto 2023</h2>
      </div>
    </footer>
  )
}
