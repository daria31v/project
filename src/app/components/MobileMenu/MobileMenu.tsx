'use client'

import { AuthNav } from '../AuthNav/authNav'
import { UserMenu } from '../User/userMenu'
import { Navigation } from '../Navigation/navigation'
import { useState } from 'react'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const session = useSession()

  const handleClick = () => {
    if (!isOpen) {
      handleOpen()
    } else {
      handleClose()
    }
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="py-4 h-auto top-10 right-10 z-50">
      <button
        onClick={handleClick}
        type="button"
        className="inline-block xl:hidden ml-auto z-10 relative"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="stroke-secondary"
          >
            <path d="M456-600h320q-27-69-82.5-118.5T566-788L456-600Zm-92 80 160-276q-11-2-22-3t-22-1q-66 0-123 25t-101 67l108 188ZM170-400h218L228-676q-32 41-50 90.5T160-480q0 21 2.5 40.5T170-400Zm224 228 108-188H184q27 69 82.5 118.5T394-172Zm86 12q66 0 123-25t101-67L596-440 436-164q11 2 21.5 3t22.5 1Zm252-124q32-41 50-90.5T800-480q0-21-2.5-40.5T790-560H572l160 276ZM480-480Zm0 400q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" />
          </svg>
        )}
      </button>
      <div
        className={clsx(
          'xl:hidden fixed md:w-1/2 top-0 right-0 z-1 font-extra font-bold uppercase text-xl text-white bg-yellow_light shadow-xl rounded-3xl',
          isOpen ? 'block' : 'hidden',
        )}
      >
        <div className="p-10 rounded-3xl " onClick={handleClick}>
          <Navigation />
          <div className="grid grid-cols-1 gap-8 mt-8 text-medium ">
            {session.data ? <UserMenu /> : <AuthNav />}
          </div>
        </div>
      </div>
    </div>
  )
}
