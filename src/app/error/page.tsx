'use client'

import { redirect} from 'next/navigation'
import { Container } from '../components/Container/container'
import Link from 'next/link'

export default function Error() {
  return (
      <section className="py-16 xl:px-[100px] md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat h-screen">
        <div className="grid gap-20">
          <h2 className="font-extra text-secondary font-extra_bold text-xl">Something went wrong! </h2>
          <Link href='/' className="font-extra text-l border bg-white text-duna w-44 py-2 px-3 justify-center items-center rounded-2xl cursor-pointer hover:bg-yellow_light hover:text-white hover:border-duna shadow-md">Try again 😊</Link>
        </div>
      </section>
  )
}


