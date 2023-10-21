import sky from "../../../../public/images/sky.jpg";
import Image from "next/image";



interface TopPostProps {
  photo: string;
  title: string;
  nikname?: string;
  post: string;
}

export default function TopPost() {
const post = {
  id: 1,
  photo: sky,
  title: "Wonderful Blog",
  nikname: "Fox",
  post: "Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue. Hi omnes lingua, institutis, legibus inter se differunt. Quid securi etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium purus sit amet fermentum.Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue. Hi omnes lingua, institutis, legibus inter se differunt. Quid securi etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium purus sit amet fermentum.",
};


  return (
    <section className="xl:max-w-[1280px] pr-[100px] pl-[100px] mb-[104px] font-normal text-medium">
      <h2 className="text-ml mt-[75px] mb-[75px] text-center uppercase font-bold">
        people love to visit
      </h2>
      <div className="flex justify-center gap-[38px] font-normal text-medium">
        <Image src={post.photo} alt="..." width={706} height={347} className="rounded-3xl"></Image>
        <div>
          <h3 className="mb-4 text-medium font-semibold">{post.title}</h3>
        <p className="text-justify">{post.post}</p>  
        </div>
      </div>
    </section>
  );
}
