import { getServerSession, type NextAuthOptions, type User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import CredentialProvider from 'next-auth/providers/credentials'
import { redirect, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'Login',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'test@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // if(!credentials || !credentials.email || !credentials.password) return null;
        // prisma - db users
        // const dbUser = await prisma.user.findFirst({
        //   where: {email: credentials.email},
        // });

        //   if(dbUser && dbUser.password ===credentials.password) {
        //     const {password, email, id, ...dbUserWhitoutPassword} = dbUser;
        //     return dbUserWhitoutPassword as User;
        //   }
        //   return null;
        // }
        const dbUser = { password: 'cat', email: 'cat@gmail.com', id: '31' }
        if (credentials?.email === dbUser.email && credentials?.password === dbUser.password) {
          return dbUser
        } else {
          return null
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  // export async function loginIsRequiredServer(){
  //   const session = await getServerSession(authConfig)
  //   if(!session) return redirect ('/')
  // }

  // export function loginIsRequiredClient (){
  //   if(typeof window !=='undefined') {
  //     const session = useSession();
  //     const router = useRouter();
  //     if(!session) router.push('/');
  //   }
  // }

  pages: {
    signIn: '/auth/signIn',
    newUser: '/auth/registration',
    error: '/auth/error',
  },
}
