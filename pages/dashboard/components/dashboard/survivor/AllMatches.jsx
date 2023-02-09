import React, { useState } from 'react'
import DeleteConfirmation from './DeleteConfirmation';
export default function AllMatches(props) {
  let data = props?.data?.data;
  let user = props?.data?.user;
  const [ matchId, setMatchId ] = useState("");
  return (
    <div className="myCustomCard-table">
    <div className="d-flex w-100 justify-content-start">
        <h1>All Matches</h1>
    </div>
    <table>
        <thead>
            <tr>
                <th className='allMatches-th'></th>
                <th className='allMatches-th'>Map</th>
                <th className='allMatches-th'>Killer</th>
                <th className='allMatches-th'>Survivor</th>
                <th className='allMatches-th'>Match Result</th>
                <th className='allMatches-th'>Match Date</th>
            </tr>
        </thead>
        <tbody>
            {data?.length === 0 && (
                <tr>
                <td colSpan={6}>You haven&apos;t played any matches yet.</td>
                </tr>
            )}
            {data?.length > 0 && (
            Object.keys(data).map((key, index) => {
                return (
                    <tr key={key}>
                        <td>
                            <div className='delete'>
                                <button id={data[index]?.id} onClick={ () => {setMatchId(data[index]?.id)} } data-bs-toggle="modal" data-bs-target="#DeleteForm">
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </div>
                        </td>
                        <td>{data[index]?.map}</td>
                        <td>{data[index]?.killer}</td>
                        {data[index]?.survivor &&
                            <td>{data[index]?.survivor}</td>
                        }
                        <td>{data[index]?.matchResult}</td>
                        {data[index]?.numberOfKills &&
                            <td>{data[index]?.numberOfKills}</td>
                        }
                        <td suppressHydrationWarning>{new Date(data[index]?.createdAt).toLocaleString()}</td>
                    </tr>
                )
            })
            )}
        </tbody>
    </table>
    <DeleteConfirmation  data={{user: user, matchId: matchId}} />
</div >
  )
}
