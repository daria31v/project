import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-evenly pt-[72px] pb-[72px] pr-[97px] pl-[97px] gap-[49px]">
      <div className="w-[421px]">
        <h1 className="text-center font-bold text-xl mb-[18px]"> A WORLD IN MY LENS</h1>
        <h2 className="text-base font-semibold mb-[60px]">
          The world is wonderful if you notice it!
          Share your experience with photos 
Let’s discover your next journey from others
        </h2>
        <p className="text-medium font-normal ">
          This platform is where you can share the beautiful things you saw
          today.
          Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue. Hi omnes lingua, institutis, legibus inter se differunt. Quid securi etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium purus sit amet fermentum.Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit 
        </p>
      </div>
      <div>
        <Image src={"/images/slider.jpg"} alt="me" width={600} height={600} />
      </div>
    </section>
  );
}
