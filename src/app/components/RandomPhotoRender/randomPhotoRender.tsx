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
      <h1 className="text-[30px] text-start uppercase font-bold">
        Share your journey
      </h1>
      <div className="mt-[46px] flex ">
        <ul className="flex justify-between gap-16">
          {posts.map((post) => (
            <li key={post.id}>
              <div className="max-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src={post.photo}
                  alt="..."
                  width={320}                  
                ></Image>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
