import React from 'react';
import { useRef, useState } from 'react';
import { maps, killers } from '../../../../../lib/dblist';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function UploadMatch(props) {
    const router = useRouter();
    const user = props?.data
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const mapRef = useRef();
    const killerRef = useRef();
    const numberOfKillsRef = useRef();

    const handleEvent = async (map, killer, numberOfKills) => {
        setMessage("");
        map = mapRef.current.value;
        killer = killerRef.current.value;
        numberOfKills = numberOfKillsRef.current.value;
        try {
          setLoading(true);
        const res = await axios({
            url: "https://us-central1-dbdtracker.cloudfunctions.net/uploadKillerMatches",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                user: user,
                map: map,
                killer: killer,
                numberOfKills: numberOfKills,
            }
        })
          setMessage("Killer Match successfully uploaded!");
          router.refresh();
        } catch (error) {
            setMessage("Upload failed. Please try again later.")
            setLoading(false);
        }
        mapRef.current.value = "";
        killerRef.current.value = "";
        numberOfKillsRef.current.value = "";
        setLoading(false);
    }

    return (
        <div className="modal fade" id="KillerForm" tabIndex="-1" aria-labelledby="KillerForm" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="match-results">
                        <div className='match-card'>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  style={{color:"#ffffff",position:"absolute",top:"10px",right:"10px",fontSize:"2rem"}}><i className="bi bi-x-lg"></i></button>
                            <h1>Upload Killer Match</h1>
                            <div className='form' >
                                {message && <span className='message'>{message}</span>}
                                <label htmlFor="map" className='text-light'>Map Played:</label>
                                <select name='map' ref={mapRef} className="form-select form-select-lg mb-3" required>
                                    <option value="" defaultChecked>Select a Map</option>
                                    {maps.map((value, index) => {
                                        return (
                                            <option key={value} value={maps[index]}>{maps[index]}</option>
                                        )
                                    })}
                                </select>
                                <label htmlFor="killer" className='text-light'>Killer Faced:</label>
                                <select name='killer' ref={killerRef} className="form-select form-select-lg mb-3" required>
                                    <option value="" defaultChecked>Select a Killer</option>
                                    {killers.map((value, index) => {
                                        return (
                                            <option key={value} value={killers[index]}>{killers[index]}</option>
                                        )
                                    })}
                                </select>
                                <label htmlFor="numberOfKills" className='text-light'>Number of Kills:</label>
                                <input name='numberOfKills' type="number" ref={numberOfKillsRef} className="form-control mb-3" max={4} min={0} required/>
                                <div className='d-flex w-100 justify-content-space-between align-items-center'>
                                    <button disabled={loading} className="myCustomCard-button w-100" onClick={handleEvent}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
