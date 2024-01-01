'use client'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import Image from 'next/image'
import buddha from '../../../../public/images/buddha.jpg'
import stone from '../../../../public/images/photo_2.jpg'
import flower from '../../../../public/images/photo_4.jpg'
import fly from '../../../../public/images/fly.jpg'
import sunrise from '../../../../public/images/photo_7.jpg'
import sky from '../../../../public/images/sky.jpg'
import kids from '../../../../public/images/photo_7.jpg'
import lake from '../../../../public/images/photo_5.jpg'
import sun from '../../../../public/images/sun.jpg'
import Button from '../Button/Buttons'
import ScrollSVG from '../../../../public/icon/Scroll'


export const GallerySlider = () => {

  return (
    <>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="relative flex-column columns-3xs gap-4 w-full"
      >
        <a href="/images/fly.jpg">
          <Image
            alt="DEVICE - SONY"
            src={fly}
            className="mb-4 rounded-lg transition transform duration-500 hover:-translate-y-1 hover:scale-105 focus:sha motion-reduce:transition-none"
            priority
          />
        </a>
        <a href="/images/kids.jpg">
          <Image
            alt="DEVICE - LENOVO"
            src={kids}
            className="mb-4 rounded-lg transition transform duration-500 hover:-translate-y-1 hover:scale-105 focus:sha motion-reduce:transition-none"
            priority
          />
        </a>
        <a href="/images/sky.jpg">
          <Image
            alt="DEVICE - SAMSUNG"
            src={sky}
            className="mb-4 rounded-lg transition transform duration-500 hover:-translate-y-1 hover:scale-105 focus:sha motion-reduce:transition-none"
            priority
          />
        </a>
        <a href="/images/photo_4.jpg">
          <Image
            alt="DEVICE - NIKON"
            src={flower}
            className="mb-4 rounded-lg transition transform duration-500 hover:-translate-y-1 hover:scale-105 focus:sha motion-reduce:transition-none"
            priority
          />
        </a>
        <a href="/images/photo_5.jpg">
          <Image
            alt="DEVICE - OLYMPUS"
            src={lake}
            className="mb-4 rounded-lg transition transform duration-500 hover:-translate-y-1 hover:scale-105 focus:sha motion-reduce:transition-none"
            priority
          />
        </a>
        <a href="/images/photo_2.jpg">
          <Image
            alt="DEVICE - LEICA"
            src={stone}
            className="mb-4 rounded-lg transition transform duration-500 hover:-translate-y-1 hover:scale-105 focus:sha motion-reduce:transition-none"
            priority
          />
        </a>
        <a href="/images/sun.jpg">
          <Image
            alt="DEVICE - SAMSUNG"
            src={sun}
            className="mb-4 rounded-lg transition transform duration-500 hover:-translate-y-1 hover:scale-105 focus:sha motion-reduce:transition-none"
            priority
          />
        </a>
        <a href="/images/sky.jpg">
          <Image
            alt="DEVICE - FUJIFILM"
            src={sunrise}
            className="mb-4 rounded-lg transition transform duration-500 hover:-translate-y-1 hover:scale-105 focus:sha motion-reduce:transition-none"
            priority
          />
        </a>
        <a href="/images/buddha.jpg">
          <Image
            alt="DEVICE - APPLE"
            src={buddha}
            className="mb-4 rounded-lg transition transform duration-500 hover:-translate-y-1 hover:scale-105 focus:sha motion-reduce:transition-none"
            priority
          />
        </a>

        
      </LightGallery>
      <div className="flex justify-center items-center mb-6">
      
     
      <Button className="border-2 border-orange w-14 h-14 flex justify-center items-center p-4 rounded-full shadow-xl bg-gradient-to-t to-[#22462CB2] via-transparent from-orange"><ScrollSVG/></Button>

      </div>
    </>
  )
}
