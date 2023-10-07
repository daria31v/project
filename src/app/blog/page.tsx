import { Metadata } from "next";
import Link from "next/link";

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
    Image: "http://",
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
  {
    id: 2,
    Image: "http://",
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
  {
    id: 3,
    Image: "http://",
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
  {
    id: 4,
    Image: "http://",
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
  {
    id: 5,
    Image: "http://",
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
  },
];

export default function Blog() {
  return (
    <div>
      <h1>Blog & Tips</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/post/${post.id}`}>{post.title}</Link>
            <p>{post.nikname}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
