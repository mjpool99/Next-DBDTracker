import logo from "@/public/LogoBeta.svg"
import Link from 'next/link'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
export default function Navigation(props) {
    const user = props?.currentUser;
    const SignOut = async () => {
        try {
            const res = [
                await signOut({
                    callbackUrl: "/auth/signin"
                })
            ];
            return res
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav>
            <div className="nav-container">
                <Image priority src={logo} alt="Logo" />
                <div className="nav-links">
                    <Link className="nav-link" href={"/dashboard"} >Dashboard</Link>
                    <Link className="nav-link" href={"/dashboard/survivor"} >Survivor Tracker</Link>
                    <Link className="nav-link" href={"/dashboard/killer"} >Killer Tracker</Link>
                    <div className="dropdown">
                        Welcome, <a className="dropdown-toggle  profile-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {user}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a className="dropdown-item sign-out" href='' onClick={SignOut}>
                                    Sign Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
