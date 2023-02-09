import Navigation from "./components/Navigation";
import { Suspense } from 'react';
import Loading from "./Loading"

function DashboardLayout({ children, ...pageProps }) {
    const currentUser = {...pageProps} || null;
    return (
        <>
            <div className="dashboard">
                <Navigation currentUser={currentUser?.data?.displayName} />
                <div className="main">
                    <Suspense fallback={<Loading />}>
                        {children}
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout