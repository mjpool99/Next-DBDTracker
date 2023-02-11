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

export const config = {matcher: ["/dashboard/:page*"]}