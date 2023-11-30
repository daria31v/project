import { Metadata } from 'next'
import { Container } from '../components/Container/container'
import { PartnersList } from '../components/PartnersList/partnersList'

// SEO
export const metadata: Metadata = {
  title: 'Partners | A World in My Lens',
  description: '',
}

export default function Partners() {
  return (
    <Container>
      <div className="w-auto text-start my-16">
        <h1 className="text-l mb-4 uppercase font-semibold">partners & sponsors</h1>
        <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
        <p className=" text-medium font-normal tracking-widest">We appreciate your efforts and generosity in supporting our company on its journey to create better community</p>
      </div>

        <PartnersList />
    </Container>
  )
}
