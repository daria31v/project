import Image from "next/image";
import buda from "../../../../public/images/buda.jpg";
import fly from "../../../../public/images/fly.jpg";
import photo from "../../../../public/images/photo.jpg";

const posts = [
  {
    id: 1,
    photo: buda,
  },
  {
    id: 2,
    photo: fly,
  },
  {
    id: 3,
    photo: photo,
  },
];

interface PhotoProps {
  id: string;
  photo: string;
}

export default function RandomPhotoRender() {
  return (
    <div className="mb-20">
      <h1 className="text-[30px] xl:text-start uppercase font-bold">
        Share your journey
      </h1>
      <div className="mt-12 xl:flex sm:block sm:text-center">
        <ul className="xl:flex md:block justify-between xl:gap-16 ">
          {posts.map((post) => (
            <li key={post.id}>
              <div className="rounded-3xl xl:max-h-96 overflow-hidden sm:mb-16 sm:text-center">
                <Image
                  src={post.photo}
                  alt="..."
                  width={320} className="rounded-2xl"               
                ></Image>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
