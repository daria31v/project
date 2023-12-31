'use client'

import { useSession } from 'next-auth/react'
import ProfileCard from './ProfileCard'
import ProfileUpdate from './ProfileUpdate'

const ProfileComponent = ({ user }: any) => {

  const { data: session, update } = useSession();
  console.log({ session })
  return (
    <div className="md:pl-[55px] mt-3 md:grid md:grid-cols-2">
      <div>
        <ProfileCard user={session?.user || user} />
      </div>
      <div>
        <ProfileUpdate userData={session?.user || user}
        // update={update}
        />
      </div>
    </div>
  )
}

export default ProfileComponent
