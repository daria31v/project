'use client'
import GallerySVG from '../../../../public/icon/GallerySVG'
import toast, { Toaster } from 'react-hot-toast'
import { useSession } from 'next-auth/react'

const BtnNewPhoto = () => {
  const { data: session } = useSession()

  const handleClick = () => {
    if (!session) {
      toast.error('Authorization Required. Please Log in or register to proceed')
      console.log('click')
    }
    return
  }

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <button
        onClick={handleClick}
        className="text-secondary my-4 text-small font-semibold px-3 rounded-md h-[38px] border border-green_light flex justify-center items-center bg-white shadow-md cursor-pointer gap-1 hover:bg-secondary hover:text-white"
      >
        <GallerySVG className="hover:stroke-white" />
        New Photo
      </button>
    </div>
  )
}

export default BtnNewPhoto
