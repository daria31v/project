import { Metadata } from 'next'
import { Container } from '../components/Container/container'
import FiilterComponent from '../components/Filter/FiilterComponent'
import { GallerySlider } from '../components/Slider/gallerySlider'

// SEO
export const metadata: Metadata = {
  title: 'Gallery | A World in My Lens',
  description: '',
}

export default function Gallery() {
  return (
    <Container>
      <section className="xl:px-[100px] pt-16 pb-6 md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
        <div >
          <h1 className="text-ml font-semibold text-secondary text-start uppercase my-4">
            Gallery
          </h1>
          <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
          <FiilterComponent />
          <GallerySlider />
        </div>
      </section>
    </Container>
  )
}
