import user from '../../../../public/images/user.webp'
import Image from 'next/image'

const CommentsItem = () => {
  return (
    <>
      
        <li className="flex xl:gap-2 md:gap-3 gap-4">
          <div>
            <Image src={user} alt="user photo" width={35} height={35} className="mx-auto" />
            <div className="grid ">
              <span className="text-base">Matthew Watson</span>
              <span className="text-center text-xs">12.18.2023</span>
            </div>
          </div>
          <div>
            <div className="  bg-peach_light text-base rounded-md px-5 py-3 text-primary shadow-md">
              <p className="">This is really helpful, THANKS A LOT!</p>
            </div>
          </div>
        </li>
        <li className="flex xl:gap-2 md:gap-3 gap-4">
          <div>
            <Image src={user} alt="user photo" width={35} height={35} className="mx-auto" />
            <div className="grid ">
              <span className="text-base">Lachlan Dempsey</span>
              <span className="text-center text-xs">12.31.2023</span>
            </div>
          </div>
          <div>
            <div className=" bg-peach_light text-base rounded-md px-5 py-3 text-primary shadow-md">
              <p className="">Thanks for this! Super useful.  I will definitely check out this place. </p>
            </div>
          </div>
        </li>
     
    </>
  )
}

export default CommentsItem
