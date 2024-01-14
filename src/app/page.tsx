'use client'

import TopPost from './components/PopularPost/TopPost'
import RandomPhotoRender from './components/DemoGallery/RandomPhotoRender'
import { Container } from './components/Container/container'
import Button from './components/Button/Buttons'
import Scroll from '../../public/icon/Scroll'
import { useEffect, useState } from 'react'

export default function Home() {
  const [hideButton, setHideButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      const scrollThreshold = 200
      if (scrollPosition > scrollThreshold) {
        setHideButton(true)
      } else {
        setHideButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div>
        <section className="">
          <div className="text-center pb-[283px] pt-[350px]  max-h-[742px] bg-hero bg-cover bg-center bg-no-repeat">
            <h1 className="text-center font-extra font-normal xl:text-extra md:text-xxl text-md mb-4 uppercase tracking-[3px] text-main_title ">
              {' '}
              A world in my lens
            </h1>
            <h2 className="xl:text-md md:text-sm text-small font-extra_bold text-center text-main_text mt-9 tracking-wide">
              Let’s discover your next journey from others
            </h2>
            <div className="flex justify-center items-center mt-20 ">
              {!hideButton && (
                <Button className="animate-bounce border border-orange  md:w-12 md:h-[70px] w-8 h-10 flex justify-center items-end px-2 md:pb-2 pb-1 rounded-3xl shadow-xl bg-gradient-to-t to-[#22462CB2] via-transparent from-[#ECAE81B2]">
                  <Scroll className="" />
                </Button>
              )}
            </div>
          </div>
          <div className=" bg-secondary pt-7 xl:px-[100px] md:px-12 px-6">
            <RandomPhotoRender />
          </div>
          <div className="xl:px-[100px] px-[50px] bg-section-texture bg-cover bg-center bg-no-repeat pt-7">
            <TopPost />
          </div>
        </section>
      </div>
    </>
  )
}
