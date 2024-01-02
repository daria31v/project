
import CommentsComponent from './CommentsComponent'
import PostCard from './PostCard'

const PostComponent = ({ postData }: any) => {


  return (
    <div className="xl:maw-w-[1090px] py-11 xl:px-36 md:px-16 px-5 bg-white rounded-md">
      <div>
        <PostCard post={postData} />
      </div>
      <div>
        <CommentsComponent/>
      </div>
    </div>
  )
}

export default PostComponent
