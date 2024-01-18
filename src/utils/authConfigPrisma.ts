
// import GoogleProvider from 'next-auth/providers/google'
// import CredentialsProvider from 'next-auth/providers/credentials'

// import bcrypt from 'bcryptjs'
// import {PrismaAdapter} from '@auth/prisma-adapter'
// import prisma from './connectDB'


// export const authConfigPrisma = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
    // CredentialsProvider({
    //   id: 'credentials',
    //   name: 'credentials',
    //   credentials: {},
    //   async authorize(credentials: any) {
    

        // try {
        //   const user = await User.findOne({ email: credentials.email })
          
        //   if (user) {
        //     const passwordsMatch = await bcrypt.compare(credentials.password, user.password)
        //     if (passwordsMatch) {
        //       return user
        //     }
        //   }
        // } catch (error: any) {
        //   console.log('Error in Login', error)
        //   throw new Error('Error in Login', error)
        // }
    //   },
    // }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as '',
//       clientSecret: process.env.GOOGLE_SECRET as '',
//     }),
//   ],



// }


