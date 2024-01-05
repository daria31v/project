'use client'
import { Metadata } from 'next'
import { Container } from '../components/Container/container'
// import FilterComponent from '../components/Filter/FilterComponent'
import { GallerySlider } from '../components/Slider/gallerySlider'
import Button from '../components/Button/Buttons'
import GallerySVG from '../../..//public/icon/GallerySVG'
// import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import BtnNewPhoto from '../components/Button/BtnNewPhoto'
import Modal from '../components/Modals/Modal'
import { useState } from 'react'
import AddPhoto from '../components/Modals/AddPhoto'
import { useSession } from 'next-auth/react'

// SEO
// export const metadata: Metadata = {
//   title: 'Gallery | A World in My Lens',
//   description: 'Explore our captivating gallery showcasing moments frozen in time—a visual journey that encapsulates the beauty of diverse experiences and landscapes. Immerse yourself in a collection that speaks volumes without words.',
// }

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data: session } = useSession()

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Container>
      <section className="xl:px-[100px] pt-16 pb-6 md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
        <div>
          <h1 className="text-ml font-semibold text-start uppercase my-3 text-secondary ">
            Gallery
          </h1>
          <div className="w-14 h-1 bg-secondary rounded-md "></div>

          <div className="md:flex md:justify-between md:items-center mb-4">
            <p className="text-secondary uppercase text-medium md:mt-0 mt-4">
              Dive into diverse visual gallery
            </p>
            <BtnNewPhoto openModal={openModal} />
          </div>
          {session && (
            <div>
              <Modal isOpen={isModalOpen} onClose={closeModal} className="w-10 h-10">
                <AddPhoto onClose={closeModal} />
              </Modal>
            </div>
          )}
          <div className="md:flex md:items-end md:justify-between">{/* <FilterComponent /> */}</div>
          <GallerySlider />
        </div>
      </section>
    </Container>
  )
}
