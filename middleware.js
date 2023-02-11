import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req){
        return NextResponse.next();
    },
    {
        callbacks: {
            authorize({ token }){
                return token?.user?.email !== "undefined"
            },
            
        }
    }
)

<<<<<<< HEAD
export const config = {matcher: ["/dashboard/:page*"]}
=======
export const config = { runtime: "edge", matcher: '/dashboard/:page*' }
>>>>>>> cd256d2fb5644291db35bfbebfc48cea48d98274
