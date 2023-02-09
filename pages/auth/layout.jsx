import logo from "@/public/LogoBeta.svg";
import Image from "next/image";
export default function AuthLayout({ children }) {
    return (
        <>
                <div className="dbd-login">
                    <Image src={logo} alt="Logo" />
                    {children}
                </div>
        </>
    )
}
