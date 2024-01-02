import Button from "./Buttons"


const ControlButtonMGroup = () => {
  return (
    <div className="flex gap-2 justify-end items-center">
        <Button className="flex justify-center items-center bg-white border border-orange py-2 px-[56px] text-orange rounded-3xl hover:text-white hover:bg-gradient-to-l hover:from-[#F38605] hover:via-transparent hover:to-[#F3860542] shadow-md">Edit</Button>
        <Button className="flex justify-center items-center bg-white border border-orange py-2 px-[56px] text-orange rounded-3xl hover:text-white hover:bg-gradient-to-l hover:from-[#F38605] hover:via-transparent hover:to-[#F3860542] shadow-md">Save</Button>
      </div>
  )
}

export default ControlButtonMGroup