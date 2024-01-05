import Image from 'next/image'
import React, { useRef } from 'react'
import upload from '../../../../public/images/upload-photos.webp'
import Devices from '../Filter/DevicesComponent'


const AddPhoto = ({onClose} : any) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
   //POST req
    // console.log('File', selectedFile);
  };
  return (
    <div className="px-[35px] py-[34px] xl:flex xl:justify-between xl:items-start xl:gap-12">
      <div className="xl:max-w-[330px] text-center" onClick={handleImageUpload}>
      <input
          type="file"
          accept="gallery/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <Image src={upload} alt="upload photo" width={330} height={330} />
        <span className="text-duna text-xs">Uploaded Photo</span>
      </div>
      <div>
        <div>
          <div className="bg-duna h-[1px] w-full"></div>
          <p className="text-duna text-medium font-bold my-4">Choose your device</p>
          <Devices />
          <div className="bg-duna h-[1px] w-full mt-4"></div>
        </div>
        <div className="mt-4 flex justify-end items-center">
          <button onClick={onClose} className="flex h-7 text-medium justify-center items-center bg-white border border-orange py-2 xl:px-6 px-3  text-orange rounded-3xl hover:text-white hover:bg-gradient-to-l hover:from-[#F38605] hover:via-transparent hover:to-[#F3860542] shadow-md">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddPhoto
