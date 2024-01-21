import CommentSVG from '../../../../public/icon/CommentSVG'

const CounterComments = () => {
  return (
    <div>
      <div className=" h-11 bg-white rounded-2xl flex justify-center items-center gap-4 ">
        <span className=" rounded-full ">
          <CommentSVG className="stroke-grey_text" />
        </span>

        <span>2</span>
      </div>
    </div>
  )
}

export default CounterComments
