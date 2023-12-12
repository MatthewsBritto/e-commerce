'use client'
import React, { useState } from 'react'
import { Beer, Lock, X } from 'lucide-react'
import Image from 'next/image'
import Paz from '@/../public/paz.svg'
import { useForm } from 'react-hook-form'
import { useUser } from '@/contexts/user-context'

type FormLogin = {
  email: string
  password: string
}

export default function ModalSignin() {
  const [signup, setSingup] = useState(false)

  const { handleSignIn, user, modalLoginActive, changeModalLoginState } =
    useUser()
  const { handleSubmit, register } = useForm<FormLogin>()
  const onSubmit = handleSubmit((data) => handleSignIn(data.email))

  return (
    <div
      className={`${
        modalLoginActive ? 'flex' : 'hidden'
      } w-full h-full fixed bg-black/50 top-0 left-0 flex items-center justify-center px-6 z-50`}
    >
      <div className="absolute top-5 right-5 md:top-36 font-bold">
        <X
          className=""
          size={30}
          onClick={() => changeModalLoginState(false)}
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-2  p-2 bg-backgroundYellow rounded-md md:h-1/2 max-w-3xl">
        <div className="flex h-full items-center justify-center bg-background/60 rounded-md md:w-[90%]">
          <Image
            src={Paz}
            alt=""
            className="h-full md:h-1/2 translate-y-[-20px]"
          />
        </div>
        <div className="flex flex-col w-full h-full items-start justify-between md:items-center md:px-4">
          <div className="flex flex-col gap-2 px-2 md:mt-14 ">
            <h2 className="font-bold text-2xl text-orangeDark md:text-3xl">
              {signup ? 'Bem-vindo !' : 'Crie sua conta'}
            </h2>
            <p className="text-base md:text-lg font-semibold w-[85%] text-orangeDark/80">
              {signup
                ? 'Acesse sua conta já e aproveite as melhores ofertas.'
                : 'Crie já sua conta e aproveite as melhores ofertas.'}
            </p>
          </div>
          <form
            className="flex flex-col flex-1 gap-2 w-full mt-4 px-2"
            onSubmit={onSubmit}
          >
            <div className="flex justify-center flex-col gap-1 ">
              <label className="font-semibold text-lg">E-mail</label>
              <div className="flex items-center w-full bg-white rounded-md p-2">
                <Beer />
                <input
                  type="email"
                  className="outline-none px-2"
                  {...register('email')}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-lg">Senha</label>
              <div className="flex items-center w-full bg-white rounded-md p-2">
                <Lock />
                <input
                  type="password"
                  className="outline-none px-2"
                  {...register('password')}
                />
              </div>
            </div>
            <button className="p-2 bg-blueBorder font-semibold  rounded-md mt-4 md:text-xl">
              Log in
            </button>
            <div className="w-full flex items-end justify-center gap-8 text-sm p-2">
              <button onClick={() => setSingup(true)}>Não tenho conta</button>
              <button>Esqueci a senha</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
