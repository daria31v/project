import { NextResponse } from 'next/server'
import connectMongoDB from '../../../utils/mongodb'
import User from '../../../models/user'
import bcrypt from 'bcryptjs'

export const POST = async (request: any) => {
  const { name, email, password } = await request.json()

  await connectMongoDB()

  const existingUser = await User.findOne({ email })

  if (existingUser) {
    return new NextResponse('Email already exists! Log In please :)', { status: 400 })
  }
  const hashedPassword = await bcrypt.hash(password, 5)

  const NewUser = new User({ name, email, password: hashedPassword })

  try {
    await NewUser.save()
    return NextResponse.json('User registered successful', { status: 200 })
  } catch (error) {
    return new NextResponse('An error occurred while registering the user.', { status: 500 })
  }
}
