import { Metadata } from 'next'
import { Container } from '../components/Container/container'
import { GallerySlider } from '../components/Slider/gallerySlider'

// SEO
export const metadata: Metadata = {
  title: 'Gallery | A World in My Lens',
  description: '',
}

export default function Gallery() {
  return (
    <Container>
      <div>
        <h1 className="text-ml font-semibold text-start uppercase mb-4 mt-4">Gallery</h1>
        <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
        <div className="mb-10">
          <p className="text-medium text-secondary font-semibold mb-3">Select deviсe</p>
          <div className="md:flex gap-3 columns-2 text-base">
            <div>
            <span>All</span>
            <input id="" type="radio"></input>
            </div>
            <div>
            <span>Lenovo</span>
            <input id="" type="radio"></input>
            </div>
            <div>
            <span>Canon</span>
            <input id="" type="radio"></input>
            </div>
            <div>
            <span>Apple</span>
            <input id="" type="radio"></input>
            </div>
            <div>
            <span >Samsung</span>
            <input id="" type="radio"></input>
            </div>
            <div>
            <span >Sony</span>
            <input id="" type="radio"></input>
            </div>
            <div>
            <span >Nikon</span>
            <input id="" type="radio"></input>
            </div>
            <div>
            <span>Leica</span>
            <input id="" type="radio"></input>
            </div>
            <div>
            <span>Olympus</span>
            <input id="" type="radio"></input>
            </div>
            <div>
            <span>Fujifilm</span>
            <input id="" type="radio"></input>
            </div>
          </div>
        </div>
        <GallerySlider/>
      </div>
    </Container>
  )
}
