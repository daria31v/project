import { Metadata } from 'next'
import GalleryComponent from '../components/GalleryComponent/GalleryComponent'

// SEO
export const metadata: Metadata = {
  title: 'Gallery | A World in My Lens',
  description: 'Explore our captivating gallery showcasing moments frozen in time—a visual journey that encapsulates the beauty of diverse experiences and landscapes. Immerse yourself in a collection that speaks volumes without words.',
}

export default function Gallery() {
  return (
    <section className="xl:px-[100px] pt-16 pb-6 md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
      <div>
        <h1 className="text-ml font-semibold text-start uppercase my-3 text-secondary ">Gallery</h1>
        <div className="w-14 h-1 bg-secondary rounded-md "></div>

        <GalleryComponent />
      </div>
    </section>
  )
}
