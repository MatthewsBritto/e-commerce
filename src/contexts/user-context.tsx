'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

export interface UserType {
  id: string
  nome: string
  isAdm?: boolean
}
export interface UserContextProps {
  user: UserType
  modalLoginActive: boolean
  handleSignIn: (email: string) => void
  changeModalLoginState: (type: boolean) => void
}

const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({} as UserType)

  const [modalLoginActive, setModalLoginActive] = useState(true)

  function handleSignIn(email: string) {
    const bodyUser = {
      id: 'teste',
      nome: email,
      isAdm: false,
    }
    setUser(bodyUser)
    return console.log(bodyUser)
  }

  function changeModalLoginState(type: boolean) {
    setModalLoginActive(type)
  }

  return (
    <UserContext.Provider
      value={{ user, modalLoginActive, handleSignIn, changeModalLoginState }}
    >
      {children}
    </UserContext.Provider>
  )
}
export const useUser = () => useContext(UserContext)
