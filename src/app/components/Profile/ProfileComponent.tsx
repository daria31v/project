'use client'

import { useSession } from 'next-auth/react'
import ProfileCard from './ProfileCard'
import AccountUpdate from './AccountUpdate'

const ProfileComponent = ({ user }: any) => {

  const { data: session, update } = useSession();

  return (
      <div className=" md:flex">
          <div className="md:px-10">
            <ProfileCard user={session?.user} />
          </div>
      <div>
        <AccountUpdate userData={session?.user || user}
        // update={update}
        />
      </div>
    </div>
  )
}

export default ProfileComponent
