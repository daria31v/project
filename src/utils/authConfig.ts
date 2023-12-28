import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectMongoDB from './mongodb'
import User from '../models/user'
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs'

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {},
      async authorize(credentials: any) {
        await connectMongoDB()

        try {
          const user = await User.findOne({ email: credentials.email })
          console.log(user)
          if (user) {
            const passwordsMatch = await bcrypt.compare(credentials.password, user.password)
            if (passwordsMatch) {
              return user
            }
          }
        } catch (error: any) {
          console.log('Error in Login', error)
          throw new Error('Error in Login', error)
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as '',
      clientSecret: process.env.GOOGLE_SECRET as '',
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
    async signIn({ user, account }) {

      if (account?.provider === 'credentials') {
        return true
      }
      if (account?.provider === 'google') {
        await connectMongoDB();
        try {
          const existUser = await User.findOne({email: user.email})
          if (!existUser){
            const newUser = new User({
              name: user.name,
              email: user.email,
              image: user.image,
              id: user.id
            })
            await newUser.save();
            return true
          }
          if (account.type === 'email' && user && user.email) {
            try {
            
              // await updateUserStatus(user.id); 
            } catch (error) {
              console.error('Failed to update user status:', error);

            }
          }
    
          return true;
        } catch (error) {
          console.log('Error saving user', error);
          return false;
        }
      }
      return true
    },
    async jwt({ token, trigger, session }) {
      // console.log('trigger:', trigger );
      // if(trigger === 'update'){
      //   token.user.name === session.name;
      //   token.user.picture === session.image;

      // } else {}
      // const user = await getUserByEmail({ email: token.email })
      // token.user = user

      return token
    },
    async session({ session, token }) {
      session.user === token.user

      return session
    },
  },
}

// async function signInWhithOAuth({ account, profile }: any) {
//   const user = await User.findOne({ email: profile.email })
//   if (user) return true

//   const newUser = new User({
//     name: profile.name,
//     email: profile.email,
//     password: profile.password,
//     image: profile.picture,
//     provider: account.provider,
//   })
//   console.log({newUser});
//   await newUser.save()
//   return true
// }

// async function getUserByEmail({ email }: any) {
//   const user = await User.findOne({ email }).select('-password')

//   if (!user) throw new Error("Email doesn't exist")

//   return { ...user._doc, _id: user._id.toString() }
// }



export async function updateUserStatus({userId, newStatus} : any) {
  const uri = process.env.MONGODB_URI as ""; 
  const client = new MongoClient(uri);
  console.log(client);
  try {
    await client.connect();

    const database = client.db('database'); 
    const usersCollection = database.collection('users'); 

    const filter = { _id: userId };
    const updateDoc = {
      $set: {
        status: newStatus,
      },
    };

    const result = await usersCollection.updateOne(filter, updateDoc);

    if (result.modifiedCount === 1) {
      console.log(`User status updated for user with ID: ${userId}`);
      return true;
    } else {
      console.error(`Failed to update status for user with ID: ${userId}`);
      return false;
    }
  } catch (error) {
    console.error('Error updating user status:', error);
    return false;
  } finally {
    await client.close();
  }
}
