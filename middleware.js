export { default } from "next-auth/middleware"


export const config = { runtime: "edge", matcher: '/dashboard/:page*' }
