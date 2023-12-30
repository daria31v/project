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
            alt="fly"
            src={fly}
            className="mb-4 rounded-lg transition transform hover:-translate-y-3 motion-reduce:transition-none"
          />
        </a>
        <a href="/images/kids.jpg">
          <Image
            alt="kids"
            src={kids}
            className="mb-4 rounded-lg transition transform hover:-translate-y-3 motion-reduce:transition-none"
          />
        </a>
        <a href="/images/sky.jpg">
          <Image
            alt="sky"
            src={sky}
            className="mb-4 rounded-lg transition transform hover:-translate-y-3 motion-reduce:transition-none"
          />
        </a>
        <a href="/images/photo_4.jpg">
          <Image
            alt="flower"
            src={flower}
            className="mb-4 rounded-lg transition transform hover:-translate-y-3 motion-reduce:transition-none"
          />
        </a>
        <a href="/images/photo_5.jpg">
          <Image
            alt="lake"
            src={lake}
            className="mb-4 rounded-lg transition transform hover:-translate-y-3 motion-reduce:transition-none"
          />
        </a>
        <a href="/images/photo_2.jpg">
          <Image
            alt="stone"
            src={stone}
            className="mb-4 rounded-lg transition transform hover:-translate-y-3 motion-reduce:transition-none"
          />
        </a>
        <a href="/images/sun.jpg">
          <Image
            alt="sun"
            src={sun}
            className="mb-4 rounded-lg transition transform hover:-translate-y-3 motion-reduce:transition-none"
          />
        </a>
        <a href="/images/sky.jpg">
          <Image
            alt="sunrise"
            src={sunrise}
            className="mb-4 rounded-lg transition transform hover:-translate-y-3 motion-reduce:transition-none"
          />
        </a>
        <a href="/images/buddha.jpg">
          <Image
            alt="buddha"
            src={buddha}
            className="mb-4 rounded-lg transition transform hover:-translate-y-3 motion-reduce:transition-none"
          />
        </a>

        
      </LightGallery>
      <div className="flex justify-center items-center mb-12">
      <Button className="p-2 border">next</Button>

      </div>
    </>
  )
}
