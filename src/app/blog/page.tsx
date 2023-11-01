import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import image from "../../../public/images/photo.jpg";
import { ContainerComponent } from "../components/ContainerComponent/containerComponent";

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
    date: "17.10.2023",
  },
  {
    id: 2,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
    date: "17.10.2023",
  },
  {
    id: 3,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
    date: "17.10.2023",
  },
  {
    id: 4,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
    date: "17.10.2023",
  },
  {
    id: 5,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
    date: "17.10.2023",
  },
  {
    id: 6,
    photo: image,
    title: "Wonderful Blog",
    nikname: "Fox",
    avatar: "http://",
    date: "17.10.2023",
  },
];

interface BlogProps {
  params: {
    id: string;
    photo: string;
    title: string;
    nikname: string;
    avatar: string;
    date: string;
  };
}

export default function Blog({
  params: { id, photo, title, nikname, avatar, date },
}: BlogProps) {
  return (
    <ContainerComponent>
      <div>
        <h1 className="text-[30px] mt-1 mb-1 text-center">Blog & Tips</h1>
        <div className="mt-6 flex justify-center">
          <ul className="grid grid-cols-3 justify-between gap-10 mb-10">
            {posts.map((post) => (
              <li key={post.id} className="bg-white rounded-3xl">
                <Link href={`/blog/post/${post.id}`}>
                  {/* <div> */}
                  <Image src={post.photo} alt="..."></Image>
                  <div className="py-2 px-5">
                    <h2 className="text-ml font-bold text-secondary">
                      {post.title}
                    </h2>
                    <p>{post.date}</p>
                  </div>
                  {/* </div> */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* loading more*/}
        <div className="flex justify-center items-center py-4">
          <button className="cursor-pointer">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="30"
                fill="url(#paint0_radial_101_183)"
                fill-opacity="0.3"
              />
              <circle cx="30" cy="30" r="24" fill="#3C64B1" />
              <path
                d="M23 24L29.8205 36L37 24"
                stroke="#EBF2FF"
                stroke-width="3"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_101_183"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(30 30) rotate(72.8973) scale(40.8044)"
                >
                  <stop
                    offset="0.0902774"
                    stop-color="#FAFAFA"
                    stop-opacity="0"
                  />
                  <stop offset="0.543402" stop-color="#BAD1FF" />
                  <stop offset="1" stop-color="#275ABD" />
                </radialGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </ContainerComponent>
  );
}
