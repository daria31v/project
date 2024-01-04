'use client'

import { AuthNav } from '../AuthNav/authNav'
import { UserMenu } from '../User/userMenu'
import { Navigation } from '../Navigation/navigation'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import MenuSVG from '../../../../public/icon/MenuSVG'
import CloseSVG from '../../../../public/icon/CloseSVG'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const session = useSession()

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  useEffect(() => {
    const appContainer = document.getElementById('app-container');
    const body = document.querySelector('body');

    
    if (appContainer && body) {
      if (isOpen) {
        appContainer.style.filter = 'blur(2px)';
        body.style.overflow = 'hidden';
     
      } else {
        appContainer.style.filter = 'none';
        body.style.overflow = 'auto'; 
      }

      return () => {
        appContainer.style.filter = 'none';
        body.style.overflow = 'auto'; 
      }
    }
  }, [isOpen])

  return (
    <div className="py-4 h-auto top-10 right-10 z-50">
      <button
        onClick={handleClick}
        type="button"
        className="inline-block xl:hidden ml-auto z-10 relative"
      >
        {isOpen ? <CloseSVG /> : <MenuSVG />}
      </button>
      <div
        className={clsx(
          'xl:hidden fixed md:w-1/2 top-0 h-screen right-0 z-1 uppercase  bg-secondary opacity-90 shadow-xl rounded-3xl',
          isOpen ? 'block' : 'hidden',
        )}
      >
        <div className="px-10 py-20 grid gap-7 font-bold rounded-3xl z-10" onClick={handleClick} style={{ filter: 'none' }}>
          <Navigation />
          <div className="grid grid-cols-1 gap-8 mt-8 text-medium ">
            {session.data ? <UserMenu /> : <AuthNav />}
          </div>
        </div>
      </div>
    </div>
  )
}
