'use client'
import { useUser } from '@/contexts/user-context'
import React, { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'div'> {
  title: string
  type: 'text' | 'email'
}

export default function InputForm({ title, type }: InputProps) {
  const { user } = useUser()
  return (
    <div className="flex w-full flex-col gap-2">
      <label>{title}</label>
      <input placeholder={user.nome} className="rounded-md p-2" type={type} />
    </div>
  )
}
