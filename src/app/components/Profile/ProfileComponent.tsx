'use client'

import { useSession } from 'next-auth/react'
import ProfileCard from './ProfileCard'
import ProfileUpdate from './ProfileUpdate'

const ProfileComponent = ({ user }: any) => {

  const { data: session, update } = useSession();
  console.log({ session })
  return (
    <div className="md:flex md:gap-10 md:justify-center md:items-center">
      <div>
        <ProfileCard user={session?.user || user} />
      </div>
      <div>
        <ProfileUpdate 
        // update={update}
        />
      </div>
    </div>
  )
}

export default ProfileComponent
