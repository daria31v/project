import Image from 'next/image'
// import mape from '../../../../../public/images/mape2.png'
import InfoBlock from '../../User/InfoBlock'


interface Post {
  id: number
  photo: string
  title: string
  tip: string
  name: string
  avatar: string
  google_tag: string
  tag: string
  date: string
  photo_path?: string
}
interface PostCardProps {
  post: Post
}
const PostCard = ({ post }: PostCardProps) => {
  // console.log(post);
  return (
    <>
      <div key={post.id} className="mb-6">
        <div>
          <h2 className="uppercase font-extra xl:text-xl md:text-ml text-sm text-secondary ">
            {post.title}
          </h2>
        </div>
        <InfoBlock post={post} />
        
        <div className="my-4">
          <p className="text-grey_text text-base">{post.tag}</p>
        </div>

        <div className="flex justify-center items-center shadow-md rounded-2xl ">
          <Image
            src={post.photo}
            alt="post"
            width={600}
            height={600}
            className="xl:w-full md:w-[600px] w-60 h-60 object-cover md:h-[700px] rounded-2xl "
          />
        </div>

        <div className=" mt-8">
          <div className="bg-peach_light text-secondary p-4 rounded-md shadow-md text-justify">
            <p className="text-medium xl:text-sm indent-8">{post.tip}</p>
          </div>
          {/* <div className="rounded-md mt-8 flex justify-center items-center">
            <Image src={post.google_tag} alt="mape" width={258} height={274} className="object-cover xl:w-[400px] w-[300px]" />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default PostCard
