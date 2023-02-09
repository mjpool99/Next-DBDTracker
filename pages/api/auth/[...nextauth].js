import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
export const authOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const user = await signInWithEmailAndPassword(auth, email, password)
        if (!user) {
          throw new Error("Email or Password is incorrect.")
        }
        return user.user
      },
    })
  ],
  pages: {
    signIn: "/auth/signin"
  },
  callbacks: {
    jwt(params){
      if(params.user){
        return params.token
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}
export default NextAuth(authOptions)