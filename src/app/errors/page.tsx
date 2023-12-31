'use client'

import { useRouter } from 'next/navigation'
import { Container } from '../components/Container/container'

const ErrorsPage = () => {
  const router = useRouter()

  return (
    <Container>
      <section className="py-28 grid justify-center gap-12 items-center justify-items-center xl:px-[100px] md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
        <h1 className="text-error mb-8 uppercase text-xl">Someting went wrong</h1>
        <h2 className="text-error uppercase text-xl">please</h2>
        <button
          onClick={() => router.push('/')}
          className="flex justify-center items-center rounded-xl mt-12 border bg-duna p-4 h-9 text-orange"
        >
          Try again
        </button>
      </section>
    </Container>
  )
}

export default ErrorsPage
