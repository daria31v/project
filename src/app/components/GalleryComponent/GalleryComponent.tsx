'use client'

import { useSession } from 'next-auth/react'
import BtnNewPhoto from '../Button/BtnNewPhoto'
import Modal from '../Modals/Modal'
import AddPhoto from '../Modals/AddPhoto'
import { GallerySlider } from './Slider/gallerySlider'
import { useState } from 'react'

const GalleryComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data: session } = useSession()

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div>
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
  )
}

export default GalleryComponent
