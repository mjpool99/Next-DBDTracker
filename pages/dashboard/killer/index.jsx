import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";
import DashboardLayout from "../layout";
import TopKillers from "../components/dashboard/killer/TopKillers";
import RecentMatch from "../components/dashboard/killer/RecentMatch";
import TopMaps from "../components/dashboard/killer/TopMaps";
import MatchesPlayed from "../components/dashboard/killer/MatchesPlayed";
import AllMatches from "../components/dashboard/killer/AllMatches";
import UploadMatch from "../components/dashboard/killer/UploadMatch";



export default function Page({userData}) {
    const matches = userData?.matches
    const displayName = userData?.user?.displayName
    const uid = userData?.user?.uid
    const functions = userData?.functions
    return (
        <DashboardLayout data={{displayName: displayName}}>

        <div className='container'>
            <div className='d-flex justify-content-center flex-column'>
                <RecentMatch data={matches[0]} />
                <div className='d-flex flex-row flex-wrap w-100 justify-content-between'>
                <MatchesPlayed data={matches?.length || 0} />
                <TopKillers data={matches} />
                <TopMaps data={matches} />
                </div>
                <AllMatches data={{data: matches, user: uid}} />
            </div>

            <UploadMatch data={{user: uid, functions: functions}}/>
        </div>
        </DashboardLayout>
    )
}
export async function getServerSideProps(context){
    const session = await getServerSession(context.req, context.res, authOptions);
    const currentUser = await axios({
        url: `${process.env.FUNCTIONS_URL}/getUser`,
        method: "POST",
        data: {
            email: session?.user?.email
        }
    })
    const killerMatches = await axios({
        url: `${process.env.FUNCTIONS_URL}/getKillerMatches`,
        method: "POST",
        data: {
            user: currentUser?.data?.uid
        }
    })
    const userData = {matches: killerMatches?.data, user: currentUser?.data, functions: process.env.FUNCTIONS_URL  }
    return {props: { userData }}
}