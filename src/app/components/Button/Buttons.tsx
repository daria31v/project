// 'use client'

import { ReactNode } from 'react'

type BtnProps = {
  // onSubmit: (formData: FormData) => void;
  children: ReactNode
  className?: string
}

const Button: React.FC<BtnProps> = ({ children, className }) => {
  const btnClasses = `custom-form ${className ? className : ''}`
  return <button className={btnClasses}>{children}</button>
}

export default Button
