import { Metadata } from 'next'
import { Container } from '../components/Container/container'
import FilterComponent from '../components/Filter/FilterComponent'
import { GallerySlider } from '../components/Slider/gallerySlider'
import Button from '../components/Button/Buttons'

// SEO
export const metadata: Metadata = {
  title: 'Gallery | A World in My Lens',
  description: '',
}

export default function Gallery() {
  return (
    <Container>
      <section className="xl:px-[100px] pt-16 pb-6 md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
        <div>
          <h1 className="text-ml font-semibold text-secondary text-start uppercase my-4">
            Gallery
          </h1>
          <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
          <div className="flex items-end mb-16 justify-between">
            <FilterComponent />
            {/* modal add photo */}
            <Button className="text-secondary text-small font-semibold px-3 rounded-md h-[38px] border border-green_light flex justify-center items-center bg-white shadow-md cursor-pointer gap-1 hover:bg-secondary hover:text-white">
              Add new photo
            </Button>
          </div>
          <GallerySlider />
        </div>
      </section>
    </Container>
  )
}
