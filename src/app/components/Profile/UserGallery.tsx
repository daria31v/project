

import Image from "next/image"
import Button from "../Button/Buttons"
import photo from '../../../../public/images/photo.webp'
import DeleteSVG from '../../../../public/icon/DeleteSVG'
import relax from '../../../../public/images/relax.webp'
// import { updateUser } from '@/actions/authActions'



const UserGallery = ({ userData }: any) => {
  
  return (
    <div>
      <h2 className=" text-secondary font-bold xl:text-l md:text-md tracking-wider md:mb-9 md:mt-0 my-9">Manage My Gallery</h2>
      <div>
        <ul className="grid xl:grid-cols-3 md:grid-cols-2  gap-3">
          <li className="relative">
            <div className="bg-white rounded-md">
              <Image src={relax} alt='photo' className="rounded-md w-full md:h-[140px] h-[240px] xl:h-[200px] object-cover"/>
             
            <div className="absolute top-2 right-2">
              <Button  className="flex justify-center items-center h-6 rounded-md text-xs p-1 bg-yellow_light hover:bg-orange"><DeleteSVG className="hover:stroke-white"/></Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white rounded-md p-2">
              <Image src={photo} alt='photo' className="rounded-md w-full md:h-full h-[220px]"/>
            <div className="absolute top-2 right-2">
              <Button  className="flex justify-center items-center h-6 rounded-md text-xs p-1   hover:bg-orange"><DeleteSVG className="hover:stroke-white hidden"/></Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white p-2 rounded-md">
              <Image src={photo} alt='photo' className="rounded-md w-full md:h-full h-[220px]"/>
            <div className="absolute top-2 right-2">
              <Button  className="flex justify-center items-center h-6 rounded-md text-xs p-1   hover:bg-orange"><DeleteSVG className="hover:stroke-white hidden"/></Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white rounded-md p-2">
              <Image src={photo} alt='photo' className="rounded-md w-full md:h-full h-[220px]"/>
            <div className="absolute top-2 right-2">
              <Button  className="flex justify-center items-center h-6 rounded-md text-xs p-1 hover:bg-orange"><DeleteSVG className="hover:stroke-white hidden"/></Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white rounded-md p-2">
              <Image src={photo} alt='photo' className="rounded-md w-full md:h-full h-[220px]"/>
            <div className="absolute top-2 right-2">
              <Button  className="flex justify-center items-center h-6 rounded-md text-xs p-1 hover:bg-orange"><DeleteSVG className="hover:stroke-white hidden"/></Button>
            </div>
            </div>
          </li>
          <li className="relative">
            <div className="bg-white rounded-md p-2">
              <Image src={photo} alt='photo' className="rounded-md w-full md:h-full h-[220px]"/>
            <div className="absolute top-2 right-2">
              <Button  className="flex justify-center items-center h-6 rounded-md text-xs p-1 hover:bg-orange"><DeleteSVG className="hover:stroke-white hidden"/></Button>
            </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default UserGallery