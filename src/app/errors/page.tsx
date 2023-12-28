'use client'

import { useRouter } from 'next/navigation'
import { Container } from '../components/Container/container'

const ErrorsPage = () => {
  const router = useRouter()

  return (
    <Container>
      <section className="my-36 grid justify-center gap-12 items-center justify-items-center">
        <h1 className="text-error mb-8 uppercase text-xl">Someting went wrong</h1>
        <h2 className="text-error uppercase text-xl">please</h2>
        <button
          onClick={() => router.push('/')}
          className="flex justify-center items-center rounded-xl mt-12 border bg-duna p-4 h-9 text-white"
        >
          Try again
        </button>
      </section>
    </Container>
  )
}

export default ErrorsPage
