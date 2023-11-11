'use client'
// import LightGallery from 'lightgallery/react'
// import 'lightgallery/css/lg-thumbnail.css'
// import 'lightgallery/css/lightgallery.css'
// import 'lightgallery/css/lg-zoom.css'
// import lgThumbnail from 'lightgallery/plugins/thumbnail'
// import lgZoom from 'lightgallery/plugins/zoom'
import Image from 'next/image'
import buddha from '../../../../public/images/buddha.jpg'
import stone from '../../../../public/images/photo_2.jpg'
import flower from '../../../../public/images/photo_4.jpg'
import fly from '../../../../public/images/fly.jpg'
import sunrise from '../../../../public/images/photo_7.jpg'
import sky from '../../../../public/images/sky.jpg'
import kids from '../../../../public/images/kids.jpg'
import lake from '../../../../public/images/photo_5.jpg'
import sun from '../../../../public/images/sun.jpg'

export const GallerySlider = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized')
  }

  return (
    <div className="relative">
      {/* <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                
            > */}
      <div className="flex-column columns-3xs gap-4 w-full">
        <a href="../../../public/images/fly.jpg">
          <Image alt="fly" src={fly} className="mb-4 rounded-lg" />
        </a>
        <a href="../../../public/images/kids.jpg">
          <Image alt="kids" src={kids} className="mb-4 rounded-lg" />
        </a>
        <a href="../../../public/images/sky.jpg">
          <Image alt="sky" src={sky} className="mb-4 rounded-lg" />
        </a>
        <a href="../../../public/images/photo_4.jpg">
          <Image alt="flower" src={flower} className="mb-4 rounded-lg" />
        </a>
        <a href="../../../public/images/photo_5.jpg">
          <Image alt="lake" src={lake} className="mb-4 rounded-lg" />
        </a>
        <a href="../../../public/images/photo_2.jpg">
          <Image alt="stone" src={stone} className="mb-4 rounded-lg" />
        </a>
        <a href="../../../public/images/sun.jpg">
          <Image alt="sun" src={sun} className="mb-4 rounded-lg" />
        </a>
        <a href="../../../public/images/sky.jpg">
          <Image alt="sunrise" src={sunrise} className="mb-4 rounded-lg" />
        </a>
        <a href="../../../public/images/buddha.jpg">
          <Image alt="buddha" src={buddha} className="mb-4 rounded-lg" />
        </a>

        {/* <button
          type="button"
          className="bg-orange_light text-white px-2 py-1 rounded-md font-main z-50 mt-7"
        >
          See more photos
        </button> */}
      </div>
      {/* </LightGallery> */}
    </div>
  )
}
