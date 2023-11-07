import { Metadata } from 'next'
import { Container } from '../components/Container/container'

// SEO
export const metadata: Metadata = {
  title: 'About us | A World in My Lens',
  description: ''
}

export default function About() {
  return (
    <Container>
      <div>
        <h1 className="text-[30px] mt-1 mb-1 text-center">About us</h1>
      </div>
    </Container>
  )
}
