import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import image from "../../../public/images/photo.jpg";

// SEO
export const metadata: Metadata = {
  title: "Blog&Tips | A World in My Lens",
  description: "",
};

// async function getData() {
//   const data = await fetch("http://.../post", {
//     next: {
//       revalidate: 60,
//     },
//   });

//   return data.json();
// }

const posts = [
  {
    id: 1,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
  {
    id: 2,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
  {
    id: 3,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
  {
    id: 4,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
  {
    id: 5,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
  {
    id: 6,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
  {
    id: 7,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
  {
    id: 8,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
];

interface BlogProps {
  params: {
    id: string;
    photo: string;
    title: string;
    nikname: string;
    avatar: string;
  };
}

export default function Blog({
  params: { id, photo, title, nikname, avatar },
}: BlogProps) {
  return (
    <div className="mr-auto ml-auto">
      <h1 className="text-[30px] mt-1 mb-1 text-center">Blog & Tips</h1>
      <div className="mt-6 flex justify-center">
        <ul className="flex flex-wrap justify-between gap-10 p-10">
          {posts.map((post) => (
            <li key={post.id}>
              <Image src={post.photo} alt="..." width={300}></Image>
              <div>
                <Link href={`/blog/post/${post.id}`}>{post.title}</Link>
                <p>{post.nikname}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
