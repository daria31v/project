import { Metadata } from "next";

interface PostProps {
  params: {
    id: string;
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

export default async function Post({ params: { id } }: PostProps) {
  // const data = await getData({id});
  const post = {
    id: 1,
    Image: "http://",
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
    tips: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consequ ut labore et dolore magna aliqua",
  };
  return (
    <>
      <div key={post.id}>
        <p>{post.nikname}</p>
        <h3>{post.title}</h3>
        <p>{post.tips}</p>
      </div>
    </>
  );
}
