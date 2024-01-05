import Image from 'next/image'
import mape from '../../../../public/images/mape2.png'
import InfoBlock from './InfoBlock'


interface Post {
  id: number,
  photo: string, 
  title: string,
  tips:  string,
  name: string,
  avatar: string,
  maps: string,
  date: string,
  photo_path?: string
}
interface PostCardProps {
  post: Post;
}
const PostCard = ({ post } : PostCardProps) => {
  // console.log(post);
  return (
    <>
      <div key={post.id} className="mb-6">
        <div>
        <h2 className=" uppercase xl:text-xl md:text-ml text-sm text-secondary">{post.title}</h2>
        </div>
        <InfoBlock post={post}/>

        <div className="flex justify-center items-center shadow-md rounded-2xl">
          <Image src={post.photo} alt="post" width={600} height={300}  className="xl:w-full md:w-[600px] rounded-2xl w-80"/>
        </div>

        <div className="xl:flex xl:items-start xl:gap-8 mt-8">
          <div className="bg-peach_light text-secondary p-4 rounded-md  xl:max-w-[500px] shadow-md text-justify">
            <p className="text-base xl:text-sm indent-8">{post.tips}</p>
          </div>

          <div className="rounded-md mt-8 flex justify-center items-center">
            <Image src={mape} alt="mape" width={258} height={274} className="object-cover xl:w-[400px] w-[300px]" />
          </div>
        </div>

      </div>
    </>
  )
}

export default PostCard
