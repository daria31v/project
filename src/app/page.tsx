
import TopPost from './components/TopPost/topPost'
import RandomPhotoRender from './components/RandomPhotoRender/randomPhotoRender'
import { Container } from './components/Container/container'

export default function Home() {
  return (
    <>
      <Container>
        <section className=" xl:grid xl:grid-cols-2 sm:block text-center py-20 xl:gap-8">
          <div>
            <h1 className="text-center font-bold text-xl mb-4 uppercase tracking-[-0.8px]">
              {' '}
              A world in my lens
            </h1>
            <h2 className="text-base font-bold text-center">
              The world is wonderful if you notice it!
            </h2>
            <h2 className="text-base font-bold mb-16 text-center">
              Share your experience with photos. Let’s discover your next journey from others!
            </h2>
            <p className="text-medium font-normal text-justify font-extra mb-10 xl:mb-0">
              This platform is where you can share the beautiful things you saw today. Gallia est
              omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui
              officia. Salutantibus vitae elit libero, a pharetra augue. Hi omnes lingua,
              institutis, legibus inter se differunt. Quid securi etiam tamquam eu fugiat nulla
              pariatur. Cras mattis iudicium purus sit amet fermentum.Gallia est omnis divisa in
              partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus
              vitae elit
            </p>
          </div>
    
          <div className="flex justify-center items-center bg-yellow">
          </div>
        </section>
        <section className="mb-20">
          <RandomPhotoRender />
          <TopPost />
        </section>
      </Container>
    </>
  )
}
