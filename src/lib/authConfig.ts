import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import CredentialsProvider from 'next-auth/providers/credentials'
import connectMongoDB from '../lib/mongodb'
import User from '../models/user'
import { signIn } from 'next-auth/react'
// import bcrypt from 'bcryptjs'

connectMongoDB()

export const authConfig: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name: 'credentials',
    //   credentials: {},
    //   async authorize(credentials: any) {
    //     const { email, password } = credentials

    //     try {
    //       await connectMongoDB()
    //       const user = await User.findOne({ email })

    //       if (!user) {
    //         return null
    //       }
    //       const passwordsMatch = await bcrypt.compare(password, user.password)

    //       if (!passwordsMatch) {
    //         return null
    //       }
    //       return user
    //     } catch (error) {
    //       console.log('Error in Ligin', error)
    //     }
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log({account, profile});
      if (account?.type === 'oauth') {
        return await signInWhithOAuth({ account, profile })
      }
      return true
    },
    async jwt({ token, trigger, session }) {
      // console.log('trigger:', trigger );
      // if(trigger === 'update'){
      //   token.user.name === session.name;
      //   token.user.picture === session.image;

      // } else {}
      const user = await getUserByEmail({ email: token.email })
      token.user = user

      return token
    },
    async session({ session, token }) {
      session.user === token.user
      
      return session
    },
  },
}

async function signInWhithOAuth({ account, profile }: any) {
  const user = await User.findOne({ email: profile.email })
  if (user) return true

  const newUser = new User({
    name: profile.name,
    email: profile.email,
    password: profile.password,
    image: profile.picture,
    provider: account.provider,
  })
  // console.log({newUser});
  await newUser.save()
  return true
}

async function getUserByEmail({ email }: any) {
  const user = await User.findOne({ email }).select('-password')

  if (!user) throw new Error("Email doesn't exist")

  return { ...user._doc, _id: user._id.toString() }
}
