import Button from "./Buttons"


const ControlButtonMGroup = () => {
  return (
    <div className="flex gap-2 justify-end  items-center">
        <Button className="flex h-9 text-medium justify-center items-center bg-white border border-orange py-2 xl:px-11 px-5  text-orange rounded-3xl hover:text-white hover:bg-gradient-to-l hover:from-[#F38605] hover:via-transparent hover:to-[#F3860542] shadow-md">Edit</Button>
        <Button className="flex h-9 text-medium justify-center items-center bg-white border border-orange py-2 xl:px-11 px-5  text-orange rounded-3xl hover:text-white hover:bg-gradient-to-l hover:from-[#F38605] hover:via-transparent hover:to-[#F3860542] shadow-md">Save</Button>
      </div>
  )
}

export default ControlButtonMGroup