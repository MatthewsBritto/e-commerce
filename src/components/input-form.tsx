'use client'
import { useUser } from '@/contexts/user-context'
import React, { ComponentProps } from 'react'
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa6'

interface InputProps extends ComponentProps<'div'> {
  title: string
  type: 'text' | 'email'
  placeholder?: string
  card?: boolean
}

export default function InputForm({
  title,
  type,
  placeholder,
  card = false,
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="w-full flex items-end justify-between">
        <label>{title}</label>
        {card && (
          <div className="w-[20%] flex items-center justify-between">
            <FaCcVisa size={28} />
            <FaCcMastercard size={28} />
          </div>
        )}
      </div>

      <input placeholder={placeholder} className="rounded-md p-2" type={type} />
    </div>
  )
}
