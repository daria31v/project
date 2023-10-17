import Image from "next/image";
import slider from "../../public/images/slider.jpg";
import TopPost from "./components/TopPost/topPost";
import RandomPhotoRender from "./components/RandomPhotoRender/randomPhotoRender";

export default function Home() {
  return (
    <>
      <section className="xl:max-w-[1280px] flex pt-[72px] pb-[72px] pr-[95px] pl-[100px] gap-[49px] justify-around">
        <div className="max-w-[430px]">
          <h1 className="text-center font-bold text-xl mb-[18px] uppercase tracking-[-0.8px]">
            {" "}
            A world in my lens
          </h1>
          <h2 className="text-base font-semibold text-center">
            The world is wonderful if you notice it!
          </h2>
          <h2 className="text-base font-semibold mb-[60px] text-center">
            Share your experience with photos Let’s discover your next journey
            from others
          </h2>
          <p className="text-medium font-normal text-justify">
            This platform is where you can share the beautiful things you saw
            today. Gallia est omnis divisa in partes tres, quarum. Fabio vel
            iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit
            libero, a pharetra augue. Hi omnes lingua, institutis, legibus inter
            se differunt. Quid securi etiam tamquam eu fugiat nulla pariatur.
            Cras mattis iudicium purus sit amet fermentum.Gallia est omnis
            divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in
            culpa qui officia. Salutantibus vitae elit
          </p>
        </div>
        <div>
          <Image src={slider} alt="slider photo" width={600} height={600}  className="rounded-3xl"/>
        </div>
      </section>
      <RandomPhotoRender />
      <TopPost />
    </>
  );
}
