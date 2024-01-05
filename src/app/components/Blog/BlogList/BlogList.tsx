import React from 'react'
import Button from '../../Button/Buttons'
import Link from 'next/link'
import Image from 'next/image'
import posts from './posts.json'
import HeartSVG from '../../../../../public/icon/HeartSVG'
import ScrollSVG from '../../../../../public/icon/Scroll'



export default function BlogList () {
  return (
    <div>
         <div className="mt-11">
          <ul className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-8 mb-10 grid gap-6">
            {posts.map((post) => (
              <li
                key={post.id}
                className=" shadow-lg hover:shadow-nude focus:shadow-nude rounded-2xl md:mb-0 transition transform hover:-translate-y-1 motion-reduce:transition-none"
              >
                <div className="overflow-hidden rounded-2xl relative">
                  <Link href={`/blog/post/${post.id}`}>
                    <div className="flex justify-center items-center">

                    <Image src={post.photo} alt="post photo"
                    className=" object-cover overflow-hidden h-[250px] md:h-[350px] 2xl:h-[400px] w-full"
                    width={300} height={300}
                    priority
                    />
                    </div>
                  <div className="absolute inset-0 flex flex-col justify-end ">
                    <div className="bg-green_light h-20 px-4 pt-2 font-extra font-semibold  hover:bg-orange_light">
                      <div className="flex justify-between items-center">

                      <div className="flex flex-col content-center">
                      <p className="text-[15px] xl:text-sm text-white">{post.title}</p>
                      <span className="text-small text-white">{post.date}</span>
                      </div>
                      <div className="ml-auto">
                        <Button>
                          <HeartSVG className=""/>
                        </Button>
                      </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center py-4">
        <Button className="border-2 border-orange md:w-14 md:h-14 animate-bounce opacity-80 flex justify-center items-center p-4 rounded-full shadow-xl bg-gradient-to-t to-[#22462CB2] via-transparent from-orange"><ScrollSVG className=""/></Button>
        </div>
    </div>
  )
}

