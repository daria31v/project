import Image from 'next/image'
import mape from '../../../../public/images/mape2.png'
import InfoBlock from './InfoBlock'

const PostCard = ({ post }: any) => {
  return (
    <>
      <div key={post.id} className="mb-6">
        <div>
        <h2 className=" uppercase font-extra xl:text-xl text-medium text-secondary">{post.title}</h2>
        </div>
        <InfoBlock post={post}/>

        <div className="flex justify-center items-center shadow-md rounded-2xl">
          <Image src={post.photo} alt="post" width={1000} height={400}  className="xl:w-[1000px] md:w-[600px]  w-80"/>
        </div>

        <div className="xl:flex xl:items-start xl:gap-16 mt-8">
          <div className="bg-peach_light text-secondary p-4 rounded-md xl:h-[347px] max-w-[650px] shadow-md text-justify">
            <p className="text-base xl:text-sm ">{post.tips}</p>
          </div>

          <div className="rounded-md mt-8 flex justify-center items-center">
            <Image src={mape} alt="mape" width={258} height={274} className="object-cover xl:w-[258px] w-[200px]" />
          </div>
        </div>

      </div>
    </>
  )
}

export default PostCard
