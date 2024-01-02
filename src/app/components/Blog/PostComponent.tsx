
import CommentsComponent from './CommentsComponent'
import PostCard from './PostCard'

const PostComponent = ({ postData }: any) => {


  return (
    <div className="xl:maw-w-[1090px] py-11 px-36 bg-white rounded-md">
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
