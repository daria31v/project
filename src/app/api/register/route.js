import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../lib/mongodb';
import User from '../../../models/registrate';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    console.log({name,email,password});
    const hashedPassword = await bcrypt.hash(password, 9);

    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword})
  
    return NextResponse.json({ message: 'User registered successful' }, { status: 201 })
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'An error occurred while registering the user.' },
      { status: 500 },
    )
  }
}
