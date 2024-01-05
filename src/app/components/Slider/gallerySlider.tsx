'use client'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import Image from 'next/image'
import Button from '../Button/Buttons'
import ScrollSVG from '../../../../public/icon/Scroll'
import { useEffect, useState } from 'react'
import NewsApiService from '@/utils/new-api-service'
import partners from '../../components/Partners/partnersData.json'

export const GallerySlider = () => {
  const [photos, setPhotos] = useState([]);
  const devices = partners;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsApiService = new NewsApiService()
        const data = await newsApiService.fetchImage()
        setPhotos(data.hits || [])
        console.log(data.hits)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchData()
  }, []);
  function getRandomDevice(devices : any) {
    const randomIndex = Math.floor(Math.random() * devices.length);
    return devices[randomIndex].name;
  }
  

  return (
    <>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="relative flex-column columns-3xs gap-4 w-full"
      >
        {photos.map(({ id, largeImageURL, webformatURL, imageHeight, imageWidth, user }) => (
          <a key={id} href={largeImageURL} >
            <Image
              alt={`Photo by user: ${user} <br/> Device: ${getRandomDevice(devices)}`}
              src={webformatURL}
              className="mb-4 rounded-lg transition transform duration-500 shadow-md hover:-translate-y-1 hover:scale-105 hover:shadow-nude motion-reduce:transition-none"
              width={imageWidth}
              height={imageHeight}
              priority
            />
          </a>
        ))}
      </LightGallery>
      <div className="flex justify-center items-center my-6">
        <Button className="border-2 border-orange md:w-14 md:h-14 flex justify-center items-center p-4 rounded-full shadow-xl bg-gradient-to-t to-[#22462CB2] via-transparent from-orange">
          <ScrollSVG />
        </Button>
      </div>
    </>
  )
}
