'use client'

import Link from 'next/link'
import Button from '../Button/Buttons'
// import { updateUser } from '@/actions/authActions'

const PostsEdit = ({ userData }: any) => {
  return (
    <div>
      <h2 className=" text-secondary font-bold xl:text-l text-md tracking-wider md:mb-9 md:mt-0 my-9">Manage My Blog</h2>

      <div>
        <ul className="grid gap-7">
          <li className="flex items-center justify-between gap-5 bg-white text-secondary border xl:max-w-[600px] w-full md:h-[95px] xl:py-5 py-2 xl:pl-6 px-2 xl:pr-3 rounded-md">
            <div className="">
              <p className="text-sm font-normal">The place you must visit in Iceland.</p>
              <span className="text-small text-grey_text">Posted 12.15.2023</span>
            </div>
            <div className="md:flex md:gap-2 text-end">
              <Link
                href="/profile/posts/edit"
                className="inline-block  h-[34px] bg-white px-4  rounded-md border text-small border-orange text-orange hover:text-white hover:border-none shadow-md hover:bg-secondary"
              >
                Edit
              </Link>
              <Button className="h-[34px] mt-2 md:mt-0 bg-white px-3 rounded-md border text-small border-orange text-orange hover:text-white hover:border-none shadow-md hover:bg-secondary">
                Delete
              </Button>
            </div>
          </li>

          <li className="flex items-center justify-between gap-5 bg-white text-secondary border xl:max-w-[600px] w-full md:h-[95px] xl:py-5 py-2 xl:pl-6 px-2 xl:pr-3 rounded-md">
            <div className="">
              <p className="text-sm font-normal">Lovely Paris.</p>
              <span className="text-small text-grey_text">Posted 12.15.2023</span>
            </div>
            <div className="md:flex md:gap-2 text-end">
              <Link
                href="/profile/posts/edit"
                className="inline-block mb-4h-[34px] bg-white px-4 rounded-md border text-small border-orange text-orange hover:text-white hover:border-none shadow-md hover:bg-secondary"
              >
                Edit
              </Link>

              <Button className="h-[34px] mt-2 md:mt-0 bg-white px-3 rounded-md border text-small border-orange text-orange hover:text-white hover:border-none shadow-md hover:bg-secondary">
                Delete
              </Button>
            </div>
          </li>

          <li className="flex items-center justify-between gap-5 bg-white text-secondary border xl:max-w-[600px] w-full md:h-[95px] xl:py-5 py-2 xl:pl-6 px-2 xl:pr-3 rounded-md">
            <div className="">
              <p className="text-sm font-normal">Mountain Switzerland.</p>
              <span className="text-small text-grey_text">Posted 12.15.2023</span>
            </div>
            <div className="md:flex md:gap-2 text-end">
              <Link
                href="/profile/posts/edit"
                className="inline-block mb-4h-[34px] bg-white px-4 rounded-md border text-small border-orange text-orange hover:text-white hover:border-none shadow-md hover:bg-secondary"
              >
                Edit
              </Link>

              <Button className="h-[34px] mt-2 md:mt-0 bg-white px-3 rounded-md border text-small border-orange text-orange hover:text-white hover:border-none shadow-md hover:bg-secondary">
                Delete
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PostsEdit
