
import CommentsComponent from './CommentsComponent'
import PostCard from './PostCard'

interface PostData {
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

interface PostComponentProps {
  posts: PostData;
}

const PostComponent = ({ posts }:PostComponentProps) => {


  return (
    <div className="xl:maw-w-[1090px] py-11 xl:px-36 md:px-16 px-5 bg-white rounded-md">
      <div>
        <PostCard post={posts} />
      </div>
      <div>
        <CommentsComponent/>
      </div>
    </div>
  )
}

export default PostComponent
