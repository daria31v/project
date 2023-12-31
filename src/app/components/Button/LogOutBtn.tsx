import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: string
}

const LogOutBtn : React.FC<Props> = ({children, className }) => {
  const style = `custom-form ${className ? className : ''}`
  return (
    <>
      <Link
        href="#"
        onClick={() =>
          signOut({
            callbackUrl: '/',
          })
        }
        className={style}
      >
        {children}
      </Link>
    </>
  )
}

export default LogOutBtn
