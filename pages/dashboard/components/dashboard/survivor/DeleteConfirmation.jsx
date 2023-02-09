import React from 'react';
import { db } from '@/firebase/config';
import { deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
export default function DeleteConfirmation(props) {
    const router = useRouter();
    const matchId = props?.data?.matchId;
    const user = props?.data?.user;
    const handleEvent = async () => {
        try{
            const res = await deleteDoc(doc(db, `UserMatches/${user}/SurvivorMatches/${matchId}`));
        }catch(error){
            console.log(error)
        }
        router.refresh();
    }
  return (
    <div className="modal fade" id="DeleteForm" tabIndex="-1" aria-labelledby="DeleteForm" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="match-card">
            <h1>Are you sure?</h1>
            <div className='d-flex w-100' style={{flexDirection: "row-reverse", margin: "30px 10px 0 10px"}}>
            <button id={matchId} className='myCustomCard-button red w-100 ms-1' data-bs-dismiss="modal" onClick={handleEvent}>Delete</button>
            <button className='myCustomCard-button w-100 ms-1' data-bs-dismiss="modal">No</button>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}
