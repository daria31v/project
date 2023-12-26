import { NextResponse } from 'next/server'
import { connectMongoDB } from '../../../lib/mongodb'
import NewUser from '../../../models/registrate'

export async function POST(request) {
  try {
    await connectMongoDB()
    const { email } = await request.json()
    const userExists = await NewUser.findOne({ email }).select('_id')
    console.log(userExists)

    return NextResponse.json({ userExists })
  } catch (error) {
    console.log(error)
  }
}
