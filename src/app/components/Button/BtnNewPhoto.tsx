'use client'
import GallerySVG from '../../../../public/icon/GallerySVG'
import toast, { Toaster } from 'react-hot-toast'
import { useSession } from 'next-auth/react'


type Props = {
    openModal: () => void;
  };
  
  const BtnNewPhoto: React.FC<Props> = ({ openModal }) => {
  const { data: session } = useSession()

  const handleClick = () => {
    if (!session) {
      toast.error('Please Log In or Join us😊')
      // console.log('click')
    }
    openModal()
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
