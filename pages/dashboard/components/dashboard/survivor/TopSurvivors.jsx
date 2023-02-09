import React from 'react';

export default function TopSurvivors(props) {
  const data = props?.data || {survivor: "name"};
  let newArray1 = [];
  let mostPlayed;

  Object.keys(data).map((key, index) => {
    return newArray1.push(data[index]?.survivor)
  })
  const count = {};
  let mostCommon = [];
  newArray1.forEach(el => {
    count[el] = (count[el] || 0) + 1;
  });
  mostCommon = Object.keys(count).reduce((acc, val, ind) => {
    if (!ind || count[val] > count[acc[0]]) {
      return [val];
    };
    if (count[val] === count[acc[0]]) {
      acc.push(val);
    };
    return acc;
  }, []);
  if (mostCommon.length > 1) mostPlayed = mostCommon[0];
  else mostPlayed = mostCommon;
  return (
    <div>
      <table className='myCustomCard-total'>
        <thead>
          <tr>
            <th className='text-center single-title'>
              Top Survivor Played
            </th>
          </tr>
        </thead>
        {data.length == 0 && (
          <tbody>
            <tr>
              <td colSpan={1}>You haven&apos;t played any matches yet.</td>
            </tr>
          </tbody>
        )}
        {data.length > 0 && (
          <tbody>
            <tr>
              <td className="single-record-name text-center">
                {mostPlayed}: {data.filter(survivor => survivor?.survivor == mostPlayed).length}
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  )
}
