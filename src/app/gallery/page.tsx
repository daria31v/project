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
      <div className="xl:px-[100px] md:px-12 px-6">
        <h1 className="text-ml font-semibold text-secondary text-start uppercase mt-16 mb-4">Gallery</h1>
        <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
        <FiilterComponent/> 
        <GallerySlider/>
      </div>
    </Container>
  )
}
