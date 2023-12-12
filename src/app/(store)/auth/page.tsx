'use client'
import InputForm from '@/components/input-form'
import { useUser } from '@/contexts/user-context'

export default function AuthForm() {
  const { user } = useUser()
  return (
    <div className="md:w-2/3 m-auto">
      <h2 className="text-lg font-bold text-center py-10 md:text-2xl">
        Meu Dados
      </h2>
      <form className="flex flex-col justify-center items-center gap-4 border bg-backgroundYellow/80 rounded-md font-semibold p-4 md:p-8">
        <InputForm title="Nome Completo" type="text" />
        <InputForm title="E-mail" type="email" placeholder={user.nome} />
        <InputForm title="Endereço" type="text" />

        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col w-[60%] gap-2">
            <InputForm title="Bairro" type="text" />
          </div>
          <div className="flex flex-col w-[35%] gap-2">
            <InputForm title="Cep" type="text" />
          </div>
        </div>
        <div className="flex w-full justify-between gap-4">
          <div className="flex w-[45%] flex-col gap-2">
            <InputForm title="Cidade" type="text" />
          </div>
          <div className="flex w-[48%] flex-col gap-2">
            <InputForm title="Complemento" type="text" />
          </div>
        </div>
        <button className="w-full rounded-md text-white p-4 bg-blueBorder md:mt-4">
          Salvar
        </button>
      </form>
    </div>
  )
}
