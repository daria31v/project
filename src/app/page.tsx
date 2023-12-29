import TopPost from './components/TopPost/topPost'
import RandomPhotoRender from './components/RandomPhotoRender/randomPhotoRender'
import { Container } from './components/Container/container'
import Button from './components/Button/Buttons'
import Scroll from '../../public/icon/Scroll'
export default function Home() {
  return (
    <>
    <div>
      <Container>
        <section className="">
          <div className="text-center pb-[283px] pt-[350px] bg-orange_light max-h-[742px] maw-w-[1600px]">
            <h1 className="text-center font-bold text-xxl mb-4 uppercase tracking-[-0.8px] text-white ">
              {' '}
              A world in my lens
            </h1>
            <h2 className="text-md font-extra_bold text-center text-white mt-9 tracking-wide">
            Let’s discover your next journey from others.
            </h2>
            <div className="flex justify-center items-center mt-20 ">
            <Button className="border-4 border-secondary w-14 h-[100px] flex justify-center items-end px-[18px] pb-[18px] rounded-3xl shadow-xl"><Scroll/></Button>

            </div>
          </div>
          <div className="px-[100px] bg-secondary pt-7">
            <RandomPhotoRender />
            </div>
            <div className="px-[100px] bg-yellow pt-7">
            <TopPost />
          </div>
        </section>
      </Container>
      </div>
    </>
  )
}
