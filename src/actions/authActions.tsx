
import { authConfig } from '@/lib/authConfig'
import User from '../models/user'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

type Props = {
  name: string
  email: string
  password: string
  image: string
 
}

export async function updateUser({ name, email, password, image }: Props) {
  const session = await getServerSession(authConfig)
  console.log(session);
  if (!session) throw new Error('Unauthorization!')

  try {
    const user = await User.findOne({email}, {
        name, email, password, image
    }, {new: true}).select('-password')

    if(!user) throw new Error('Email does not exist!')

    return {msg: "Update profile successful!"}
  } catch (error) {
    console.log(error);
    redirect(`/errors?error=`)
  }
}
