import React from 'react';
import { useRef, useState } from 'react';
import { maps, killers, survivors } from '../../../../../lib/dblist';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function UploadMatch(props) {
    const router = useRouter();
    const user = props?.data
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const mapRef = useRef();
    const killerRef = useRef();
    const survivorRef = useRef();
    const matchResultRef = useRef();

    const handleEvent = async (map, killer, survivor, matchResult) => {
        setMessage("");
        map = mapRef.current.value;
        killer = killerRef.current.value;
        survivor = survivorRef.current.value;
        matchResult = matchResultRef.current.value;
        try {
          setLoading(true);
        const res = await axios({
            url: "https://us-central1-dbdtracker.cloudfunctions.net/uploadSurvivorMatches",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                user: user,
                map: map,
                killer: killer,
                survivor: survivor,
                matchResult: matchResult
            }
        })
          setMessage("Survivor Match successfully uploaded!");
          router.refresh();
          console.log("Done")
        } catch (error) {
          setMessage("Upload failed. Please try again later.")
        }
        mapRef.current.value = "";
        killerRef.current.value = "";
        survivorRef.current.value = "";
        matchResultRef.current.value = "";
        setLoading(false);
    }

    return (
        <div className="modal fade" id="SurvivorForm" tabIndex="-1" aria-labelledby="SurvivorForm" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="match-results">
                        <div className='match-card'>
                            <button type="button" onClick={() => { setMessage("") }} className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ color: "#ffffff", position: "absolute", top: "10px", right: "10px", fontSize: "2rem" }}><i className="bi bi-x-lg"></i></button>
                            <h1>Upload Survivor Match</h1>
                            <div className="form">
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
                                <label htmlFor="survivor" className='text-light'>Survivor Played:</label>
                                <select name='survivor' ref={survivorRef} className="form-select form-select-lg mb-3" required>
                                    <option value="" defaultChecked>Select a Survivor</option>
                                    {survivors.map((value, index) => {
                                        return (
                                            <option key={value} value={survivors[index]}>{survivors[index]}</option>
                                        )
                                    })}
                                </select>
                                <label htmlFor="matchResult" className='text-light'>Match Result:</label>
                                <select name='matchResult' ref={matchResultRef} className="form-select form-select-lg mb-3" required>
                                    <option value="" defaultChecked>Select a Match Result</option>
                                    <option>Killer Disconnected</option>
                                    <option>Dead</option>
                                    <option>Sacrificed</option>
                                    <option>Escaped</option>
                                </select>
                                <div className='d-flex w-100 justify-content-space-between align-items-center'>
                                    <button disabled={loading} onClick={handleEvent} className="myCustomCard-button w-100">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
