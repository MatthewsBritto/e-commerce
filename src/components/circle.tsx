import React, { ComponentProps, ReactNode } from 'react'

interface CircleProps extends ComponentProps<'div'> {
  children?: ReactNode
}

export default function Circle({ children, ...props }: CircleProps) {
  return <div {...props}>{children}</div>
}
