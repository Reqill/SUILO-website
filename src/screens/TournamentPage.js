import React, { useState } from 'react';
import image from "../images/trophy.svg"
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import TournamentCard from "../components/TournamentCard.js";
import { fetchJSON } from "../FetchingData.ts"

const generateCard = (json) => {
    return json.map((el, i) => <TournamentCard elementData={el} i={i} />)
}


export default function TournamentPage() {
    const [loaded, setLoaded] = useState(false);
    const [tournament, setTournaments] = useState("");
    if (loaded) {
        return (
            <div className="tournamentPage-container">
                <div className="tournamentPage-left">
                    <div className="tournament-list">
                        {generateCard(tournament)}
                    </div>
                </div>
                <div className="tournamentPage-right">
                    <img src={image} className="trophy-image" />
                </div>
            </div >
        );
    }
    else {
        fetchJSON("https://api.npoint.io/ffeaad501c895f679167").then((res) => {
            setTournaments(res);
            setLoaded(true);
        })
        return (
            <div className="tournamentPage-container">
                <div className="tournamentPage-left">
                    <div className="tournament-list">
                        <div className="tournament-loader">
                            <Loader type="Bars" color="#f58f0b" height={50} width={50} />
                        </div>
                    </div>
                </div>
                <div className="tournamentPage-right">
                    <img src={image} className="trophy-image" />
                </div>
            </div >
        );
    }

}