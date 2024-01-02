import Image from 'next/image'
import mape from '../../../../public/images/mape2.png'
import InfoBlock from './InfoBlock'

const PostCard = ({ post }: any) => {
  return (
    <>
      <div key={post.id}>
        <div>
        <h2 className=" uppercase font-extra text-xxl">{post.title}</h2>
        </div>
        <InfoBlock/>

        <div className="flex justify-center items-center shadow-md rounded-2xl">
          <Image src={post.photo} alt="post" width={1000} height={400} />
        </div>

        <div className="flex items-start gap-16 mt-8">
          <div className="bg-green_light text-white p-4 rounded-md h-[347px] max-w-[650px] shadow-md">
            <p>{post.tips}</p>
          </div>

          <div className="rounded-md">
            <Image src={mape} alt="mape" width={258} height={274} className="object-cover" />
          </div>
        </div>

      </div>
    </>
  )
}

export default PostCard
