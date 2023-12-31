import TopPost from './components/PopularPost/TopPost'
import RandomPhotoRender from './components/DemoGallery/RandomPhotoRender'
import { Container } from './components/Container/container'
import Button from './components/Button/Buttons'
import Scroll from '../../public/icon/Scroll'
export default function Home() {
  return (
    <>
    <div>
      <Container>
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
            <Button className="border-2 border-orange w-14 h-[80px] flex justify-center items-end px-[21px] pb-[15px] rounded-3xl shadow-xl bg-gradient-to-t to-[#22462CB2] via-transparent from-[#ECAE81B2]"><Scroll/></Button>

            </div>
          </div>
          <div className=" bg-secondary pt-7 xl:px-[100px] md:px-12 px-6">
            <RandomPhotoRender />
            </div>
            <div className="xl:px-[100px] px-[50px] bg-section-texture bg-cover bg-center bg-no-repeat pt-7">
            <TopPost />
          </div>
        </section>
      </Container>
      </div>
    </>
  )
}
