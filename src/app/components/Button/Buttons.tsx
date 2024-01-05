// 'use client'

import { ReactNode } from 'react'

type BtnProps = {
  // onSubmit: (formData: FormData) => void;
  children: ReactNode
  className?: string
  onClick?:() => void | undefined
}

const Button: React.FC<BtnProps> = ({ children, className, onClick }) => {
  const btnClasses = `custom-form ${className ? className : ''}`
  return <button className={btnClasses} onClick={onClick}>{children}</button>
}

export default Button
