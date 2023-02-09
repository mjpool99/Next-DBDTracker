import AuthLayout from "../layout";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useState, useRef } from "react";
import Link from "next/link";
export default function Page() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match.")
    }
    try {
      setError("")
      setLoading(true)
      const res = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      updateProfile(auth.currentUser, {displayName: usernameRef.current.value})
      console.log(res)
      setMessage("Account created!")
      usernameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
    } catch (error) {
      setError("Account creation failed.")
    }
    setLoading(false)
  }
  return (
    <AuthLayout>
      <div className="dbd-login">
        <form className="myCustomCard-login" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <br />
          {error && <span>{error}</span>}
          {message && <span>{message}</span>}
          <input type="text" ref={usernameRef} placeholder="Username" required />
          <input type="email" ref={emailRef} placeholder="Email" required />
          <input type="password" ref={passwordRef} placeholder="Password" required />
          <input type="password" ref={confirmPasswordRef} placeholder="Confirm Password" required />
          <button disabled={loading} type="submit">Sign Up</button>
          <br />
          <span className="subLink">
            <Link href={"/auth/signin"}>Back to Sign In</Link>
          </span>
        </form>
      </div>
    </AuthLayout>
  )
}
