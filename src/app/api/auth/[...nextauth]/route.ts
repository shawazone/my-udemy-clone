import bcrypt from 'bcrypt';
import NextAuth , { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../lib/prismadb';



export const authOptions : AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [    
     CredentialsProvider({
        name: 'credentials',
        credentials: {
            email: { label: 'email', type: 'text'},
            password: { label: 'password', type: 'password'}
        },
        async authorize(credentials) {
            if(!credentials?.email || !credentials?.password) {
                console.log('Invalid credentials 1');
                throw new Error('Invalid credentials 1');
            }

            const user = await prisma.user.findUnique({
                where: { email: credentials.email }
            });

            if(!user || !user.hashedPassword) {
                console.log('Invalid credentials 2');
                throw new Error('Invalid credentials 2');

            }

        const isCorrectPassword = await bcrypt.compare(
        credentials.password,
         user.hashedPassword
         );
       

         if(!isCorrectPassword) {
            console.log('Invalid credentials 3');

             throw new Error('Invalid credentials 3');
         }


         return user;
           
        
        }



        })
   ],


   pages:{
    signIn: '/',
   
   },
   debug: process.env.NODE_ENV === 'development',

   session: {   
    strategy: 'jwt',
   }

}
const handler = NextAuth(authOptions);
export  {handler as GET, handler as POST};