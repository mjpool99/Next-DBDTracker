import React from 'react';

export default function MatchesPlayed(props) {
  const totalMatches = props?.data;
  return (
    <div>
    <table  className='myCustomCard-total'>
        <thead>

            <tr>
                <th className='text-center single-title'>
                    Matches Played
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="single-record text-center">
                    {totalMatches}
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )
}
