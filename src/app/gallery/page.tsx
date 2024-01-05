
import { Metadata } from 'next'
import { Container } from '../components/Container/container'
// import FilterComponent from '../components/Filter/FilterComponent'
import { GallerySlider } from '../components/Slider/gallerySlider'
import Button from '../components/Button/Buttons'
import GallerySVG from '../../..//public/icon/GallerySVG'
// import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import BtnNewPhoto from '../components/Button/BtnNewPhoto'


// SEO
export const metadata: Metadata = {
  title: 'Gallery | A World in My Lens',
  description: 'Explore our captivating gallery showcasing moments frozen in time—a visual journey that encapsulates the beauty of diverse experiences and landscapes. Immerse yourself in a collection that speaks volumes without words.',
}

export default function Gallery() {
  
  return (
    <Container>
      <section className="xl:px-[100px] pt-16 pb-6 md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
        <div>
          <h1 className="text-ml font-semibold text-start uppercase my-3 text-secondary">
            Gallery
          </h1>
          <div className="w-14 h-1 bg-secondary rounded-md "></div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-secondary uppercase text-medium">Dive into diverse visual gallery</p>
            {/* modal add photo */}
            <BtnNewPhoto/>
           
          </div>

          <div className="md:flex md:items-end md:justify-between">
            {/* <FilterComponent /> */}
          </div>
          <GallerySlider/>
        </div>
      </section>
    </Container>
  )
}
