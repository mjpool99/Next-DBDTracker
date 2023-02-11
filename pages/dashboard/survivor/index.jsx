import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";
import AllMatches from "../components/dashboard/survivor/AllMatches";
import RecentMatch from "../components/dashboard/survivor/RecentMatch";
import MatchesPlayed from "../components/dashboard/survivor/MatchesPlayed";
import TopSurvivors from "../components/dashboard/survivor/TopSurvivors";
import TopKillers from "../components/dashboard/survivor/TopKillers";
import TopMaps from "../components/dashboard/survivor/TopMaps";
import UploadMatch from "../components/dashboard/survivor/UploadMatch";
import DashboardLayout from "../layout";

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
                        <TopSurvivors data={matches} />
                        <TopKillers data={matches} />
                        <TopMaps data={matches} />
                    </div>
                    <AllMatches data={{ data: matches, user: uid }} />
                </div>

                <UploadMatch data={{user: uid, functions: functions}} />
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
        const survivorMatches = await axios({
            url: `${process.env.FUNCTIONS_URL}/getSurvivorMatches`,
            method: "POST",
            data: {
                user: currentUser?.data?.uid
            }
        })
        const userData = {matches: survivorMatches?.data, user: currentUser?.data, functions: process.env.FUNCTIONS_URL }
        return {props: { userData }}
}