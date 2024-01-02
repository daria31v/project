

import Image from "next/image"
import Button from "../Button/Buttons"
import photo from '../../../../public/images/photo.webp'

// import { updateUser } from '@/actions/authActions'



const UserGallery = ({ userData }: any) => {
  
  return (
    <div>
      <h2 className=" text-secondary font-bold text-l tracking-wider mb-14">Manage My Gallery</h2>
      <div>
        <ul className="grid grid-cols-2 gap-3">
          <li className="relative">
            <div className="bg-white rouded-md p-2 rounded-md">
              <Image src={photo} alt='photo' className="rounded-md w-full"/>
              {/* white modal aprove */}
            <div className="absolute top-2 right-2">
              <Button className="h-6 rounded-md text-xs p-1 bg-white border border-orange hover:text-error hover:border-error">Delete</Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white rouded-md p-2 rounded-md">
              <Image src={photo} alt='photo' className="rounded-md w-full"/>
            <div className="absolute top-2 right-2">
              <Button className="h-6 rounded-md text-xs p-1 bg-white border border-orange hover:text-error hover:border-error">Delete</Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white rouded-md p-2 rounded-md">
              <Image src={photo} alt='photo' className="rounded-md w-full"/>
            <div className="absolute top-2 right-2">
              <Button className="h-6 rounded-md text-xs p-1 bg-white border border-orange hover:text-error hover:border-error">Delete</Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white rouded-md p-2">
              <Image src={photo} alt='photo' className="rounded-md w-full"/>
            <div className="absolute top-2 right-2">
              <Button className="h-6 rounded-md text-xs p-1 bg-white border border-orange hover:text-error hover:border-error">Delete</Button>
            </div>
            </div>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default UserGallery