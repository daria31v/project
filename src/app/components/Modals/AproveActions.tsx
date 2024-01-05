import React from 'react'

const AproveActions = ({ onClose }: any) => {
  return (
    <div>
      <div>
        <div className="bg-duna h-[1px] w-full"></div>
        <p className="text-duna text-medium font-bold my-4">Do you really want to delete photo?</p>
        <div className="bg-duna h-[1px] w-full mt-4"></div>
      </div>
      <div className="mt-4 flex justify-end items-center">
        <button
          onClick={onClose}
          className="flex h-7 text-medium justify-center items-center bg-white border border-orange py-2 xl:px-6 px-3  text-orange rounded-3xl hover:text-white hover:bg-gradient-to-l hover:from-[#F38605] hover:via-transparent hover:to-[#F3860542] shadow-md"
        >
          No
        </button>
        <button
          type="submit"
          className="flex h-7 text-medium justify-center items-center bg-white border border-orange py-2 xl:px-6 px-3  text-orange rounded-3xl hover:text-white hover:bg-gradient-to-l hover:from-[#F38605] hover:via-transparent hover:to-[#F3860542] shadow-md"
        >
          Yes
        </button>
      </div>
    </div>
  )
}

export default AproveActions
