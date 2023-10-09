// import { Metadata } from "next";
import Image from "next/image";
import image from '../../../../../public/images/photo.jpg'

interface PostProps {
  params: {
    id: string;
    src: string;
    alt: string;
  };
}

// export async function generateMetadata({params: {id}, } : PostProps) : Promise<Metadata> {
// const post = await getData({id});
//   return {
//   title: post.title,
// }
// }

// async function getData(params: {id: string}) {
//   const data = await fetch(`http://.../post/${id}`, {
//     next: {
//       revalidate: 60,
//     },
//   });

//   return data.json();
// }

export default async function Post({ params: { id, src, alt } }: PostProps) {
  // const data = await getData({id});
  const post = {
    id: 1,
    Image: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
    tips: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consequ ut labore et dolore magna aliqua",
  };
  return (
    <section className="p-8 ">
      <div key={post.id}>
        <Image src={image} alt="post" width={150} ></Image>
        <p>user: {post.nikname}</p>
        <h3>{post.title}</h3>
        <p>{post.tips}</p>
      </div>
    </section>
  );
}
