import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import AuthLayout from "../layout";
export default function Page() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            const data = await signIn('credentials', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            console.log(data)
            return data;
        } catch (error) {
            setError("Email or password is incorrect.");
        }
        setLoading(false)
    }

    return (
        <AuthLayout>
            <form className="myCustomCard-login" >
                <h1>Login</h1>
                <br />
                {error && <span>{error}</span>}
                <input type="email" name="email" ref={emailRef} placeholder="Email" />
                <input type="password" name="password" ref={passwordRef} placeholder="Password" />
                <button disabled={loading} type="submit" onClick={handleSubmit}>Sign In</button>
                <br />
                <span className="subLink">Forgot your password? <Link href={"/auth/forgotpassword"}>Reset</Link></span>
                <span className="subLink">Need an account? <Link href={"/auth/signup"}>Sign Up!</Link></span>
            </form>
        </AuthLayout>
    )
}
