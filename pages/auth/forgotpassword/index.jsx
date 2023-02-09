import AuthLayout from "../layout";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useState, useRef } from "react";
import Link from "next/link";
export default function Page() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          setError("")
          setMessage("")
          await sendPasswordResetEmail(auth, emailRef.current.value)
          setMessage("Check your email for further instructions.")
          setLoading(true)
          emailRef.current.value = ""
      } catch (error) {
          setError("Failed to send reset email.");
      }
  }
  return (
    <AuthLayout>
        <div className="dbd-login">
            <form className="myCustomCard-login" onSubmit={handleSubmit}>
                <h1>Forgot Password?</h1>
                <br />
                {error && <span>{error}</span>}
                {message && <span>{message}</span>}
                <input type="email" name="email" ref={emailRef} placeholder="Email" />
                <button disabled={loading} type="submit">Reset Password</button>
                <br />
                <span className="subLink">
                <Link href={"/auth/signin"}>Back to Sign In.</Link>
                </span>
                <span className="subLink">Need an account? <Link href={"/auth/signup"}>Sign Up!</Link></span>
            </form>
        </div>
    </AuthLayout>
  )
}