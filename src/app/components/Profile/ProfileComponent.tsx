'use client'

import ProfileCard from './ProfileCard'
import ProfileUpdate from './ProfileUpdate'

const ProfileComponent = ({ user }: any) => {
//   console.log({ user })
  return (
    <div className="md:flex md:gap-10 md:justify-center md:items-center">
      <div>
        <ProfileCard user={user} />
      </div>
      <div>
        <ProfileUpdate />
      </div>
    </div>
  )
}

export default ProfileComponent
