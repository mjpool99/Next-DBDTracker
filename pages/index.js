import Link from "next/link"
import AuthLayout from "./auth/layout"
export default function Home() {
  return (
    <>
      <AuthLayout>
        <div className="myCustomCard-login" >
          <Link className="myCustomCard-button" href={"/auth/signin"}>Sign In</Link>
        </div>
      </AuthLayout>
    </>
  )
}
