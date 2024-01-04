// 'use client'
import { Metadata } from 'next'
import { Container } from '../components/Container/container'
import FilterComponent from '../components/Filter/FilterComponent'
import { GallerySlider } from '../components/Slider/gallerySlider'
import Button from '../components/Button/Buttons'
import GallerySVG from '../../..//public/icon/GallerySVG'
import NewsApiService from '../../utils/new-api-service'
import { useEffect, useState } from 'react'

// SEO
export const metadata: Metadata = {
  title: 'Gallery | A World in My Lens',
  description: '',
}
// const newsApiService = new NewsApiService();
// console.log(newsApiService);
// console.log(api);
// const apiData = newsApiService.fetchImage().then(data => data.hits)
// console.dir(apiData);
export default function Gallery() {

  return (
    <Container>
      <section className="xl:px-[100px] pt-16 pb-6 md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
        <div>
          <h1 className="text-ml font-semibold text-start uppercase my-3 text-secondary">
            Gallery
          </h1>
          <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-secondary uppercase text-base">Select device</p>
            <Button className="text-secondary my-4 text-small font-semibold px-3 rounded-md h-[38px] border border-green_light flex justify-center items-center bg-white shadow-md cursor-pointer gap-1 hover:bg-secondary hover:text-white">
              <GallerySVG />
              New Photo
            </Button>
          </div>

          <div className="md:flex md:items-end mb-16 md:justify-between">
            <FilterComponent />
            {/* modal add photo */}
          </div>
          <GallerySlider/>
        </div>
      </section>
    </Container>
  )
}
