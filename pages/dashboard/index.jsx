import React from 'react'
import DashboardLayout from "./layout"
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import axios from 'axios';

export default function Page({currentUser}) {
  return (
    <DashboardLayout data={{displayName: currentUser?.displayName}}>
      <div>
        <h1 style={{ textAlign: "center" }}>
          Dashboard content coming soon...
        </h1>
      </div>
    </DashboardLayout>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const res = await axios({
      url: `${process.env.FUNCTIONS_URL}/getUser`,
      method: "POST",
      data: {
          email: session?.user?.email
      }})
  const currentUser = res?.data
  return { props: { currentUser } }
}