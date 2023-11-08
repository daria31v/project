import kids from '../../../../public/images/kids.jpg'
import Image from 'next/image'

interface TopPostProps {
  photo: string
  title: string
  nikname?: string
  post: string
}

export default function TopPost() {
  const post = {
    id: 1,
    photo: kids,
    title: 'Wonderful Blog',
    nikname: 'Fox',
    post: 'Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue. Hi omnes lingua, institutis, legibus inter se differunt. Quid securi etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium purus sit amet fermentum.Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue. Hi omnes lingua, institutis, legibus inter se differunt. Quid securi etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium purus sit amet fermentum.',
  }

  return (
    <div className="font-normal text-medium">
      <h2 className="text-ml text-center xl:text-left  uppercase font-bold">
        people love to visit
      </h2>
      <div className="xl:grid xl:grid-cols-2 gap-10 md:block font-normal text-medium mt-12 ">
        <div className="flex justify-center">
          <Image
            src={post.photo}
            alt="..."
            width={640}
            height={400}
            className="rounded-3xl object-cover"
          ></Image>
        </div>

        <div className="mt-4 xl:mt-0 w-auto">
          <h3 className="mb-4 text-medium font-bold">{post.title}</h3>
          <p className="text-justify font-extra">{post.post}</p>
        </div>
      </div>
    </div>
  )
}
