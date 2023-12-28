'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

type Props = {
  value: string
}

const Button = ({ value, ...props }: Props) => {
  const { pending } = useFormStatus()

  return (
    <button {...props} disabled={pending}>
      {pending ? 'Loading....' : value}
    </button>
  )
}

export default Button
