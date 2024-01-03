

import Image from "next/image"
import Button from "../Button/Buttons"
import photo from '../../../../public/images/photo.webp'
import DeleteSVG from '../../../../public/icon/DeleteSVG'
// import { updateUser } from '@/actions/authActions'



const UserGallery = ({ userData }: any) => {
  
  return (
    <div>
      <h2 className=" text-secondary font-bold xl:text-l md:text-md tracking-wider md:mb-9 md:mt-0 my-9">Manage My Gallery</h2>
      <div>
        <ul className="grid xl:grid-cols-3 md:grid-cols-2  gap-3">
          <li className="relative">
            <div className="bg-white rouded-md p-2 rounded-md">
              <Image src={photo} alt='photo' className="rounded-md w-full"/>
              {/* white modal aprove */}
            <div className="absolute top-2 right-2">
              <Button  className="flex justify-center items-center h-6 rounded-md text-xs p-1 bg-white"><DeleteSVG/></Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white rouded-md p-2 rounded-md">
              <Image src={photo} alt='photo' className="rounded-md w-full"/>
            <div className="absolute top-2 right-2">
              <Button  className="flex justify-center items-center h-6 rounded-md text-xs p-1 bg-white"><DeleteSVG/></Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white rouded-md p-2 rounded-md">
              <Image src={photo} alt='photo' className="rounded-md w-full"/>
            <div className="absolute top-2 right-2">
              <Button  className="flex justify-center items-center h-6 rounded-md text-xs p-1 bg-white"><DeleteSVG/></Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white rouded-md p-2">
              <Image src={photo} alt='photo' className="rounded-md w-full"/>
            <div className="absolute top-2 right-2">
              <Button  className="flex justify-center items-center h-6 rounded-md text-xs p-1 bg-white"><DeleteSVG/></Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white rouded-md p-2">
              <Image src={photo} alt='photo' className="rounded-md w-full"/>
            <div className="absolute top-2 right-2">
              <Button  className="flex justify-center items-center h-6 rounded-md text-xs p-1 bg-white"><DeleteSVG/></Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white rouded-md p-2">
              <Image src={photo} alt='photo' className="rounded-md w-full"/>
            <div className="absolute top-2 right-2">
              <Button  className="flex justify-center items-center h-6 rounded-md text-xs p-1 bg-white"><DeleteSVG/></Button>
            </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default UserGallery