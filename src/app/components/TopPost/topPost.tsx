import kids from "../../../../public/images/kids.jpg";
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
    photo: kids,
    title: "Wonderful Blog",
    nikname: "Fox",
    post: "Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue. Hi omnes lingua, institutis, legibus inter se differunt. Quid securi etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium purus sit amet fermentum.Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue. Hi omnes lingua, institutis, legibus inter se differunt. Quid securi etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium purus sit amet fermentum.",
  };

  return (
    <div className="font-normal text-medium">
      <h2 className="text-ml xl:text-center sm:text-left uppercase font-bold">
        people love to visit
      </h2>
      <div className="xl:flex md:block xl:gap-[38px] font-normal text-medium mt-12 ">
        <Image
          src={post.photo}
          alt="..."
          width={600}
          height={600}
          className="rounded-3xl "
        ></Image>
        <div className="md:mt-10">
          <h3 className="mb-4 text-medium font-semibold">{post.title}</h3>
          <p className="text-justify font-text">{post.post}</p>
        </div>
      </div>
    </div>
  );
}
