import { Metadata } from 'next'
import { Container } from '../components/Container/container'
import { PartnersList } from '../components/Partners/PartnersList'

// SEO
export const metadata: Metadata = {
  title: 'Partners | A World in My Lens',
  description: 'Welcome to a space dedicated to celebrating collaborations with esteemed manufacturers and innovators in the realm of photography technology. Here, we honor the fruitful alliances that drive our visual narratives, uniting with leading creators and visionaries to craft stories that transcend the lens.',
}

export default function Partners() {
  return (
    <Container>
      <section className="py-16 xl:px-[100px] md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
        <div className="">
          <div className="grid justify-around">
            <div>
              <h1 className="text-md font-bold text-center uppercase mb-4 mt-4 text-secondary">
                partners & sponsors
              </h1>
            </div>
            <div className="flex justify-center items-center mb-4">
              <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
            </div>
            <p className="max-w-[469px] font-normal text-primary text-center text-medium mb-9">
              We appreciate your efforts and generosity in supporting our company on its journey to
              create better community
            </p>
          </div>
        </div>

        <PartnersList />
      </section>
    </Container>
  )
}
