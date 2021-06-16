import "../styles/App.css"
import placeholder from "../images/placeholder.jpg";
import React, { useState } from "react";

export default function TournamentCard(props) {
    const [visible, setVisible] = useState("none");
    const elementData = props;
    const { tournamentName, gameTitle, endOfSigningIn, numberOfContestants, stateOfTournament, graphicURL, formURL, rules } = elementData.elementData;
    let color;
    let button;
    let image;
    let url;

    if (formURL === "none") {
        url = "https://forms.gle/XY4bWVuecYfVzSnw5";
    } else {
        url = formURL;
    }

    if (graphicURL === "none") {
        image = placeholder;
    } else {
        image = graphicURL;
    }


    switch (stateOfTournament.toLowerCase()) {
        case ("zapisy"):
            color = { color: "green", opacity: "1" };
            button = { backgroundColor: "#f59314" }
            break;
        case ("oczekuje"):
            color = { color: "grey", opacity: ".7" };
            button = { backgroundColor: "#f59314" }
            break;
        case ("trwa"):
            color = { color: "red", opacity: "1" };
            button = { backgroundColor: "#f59314" }
            break;
        case ("rozpoczynanie"):
            color = { color: "orange", opacity: "1" }
            button = { backgroundColor: "#f59314" }
            break;
        default:
            color = { color: "#333333" };
            button = { backgroundColor: "#f59314" }
            break;
    }

    return (
        <div className="tournament-card">
            <div className="info">
                <h2>{tournamentName}</h2>
                <div className="name-container">
                    <p className="header-indicator">Gra: </p>
                    <p className="content" style={{ color: "teal" }}>{gameTitle}</p>
                </div>
                <div className="name-container">
                    <p className="header-indicator">Koniec Zapisów: </p>
                    <p className="content" style={{ color: "teal" }}>{endOfSigningIn}</p>
                </div>
                <div className="name-container">
                    <p className="header-indicator">Liczba uczestników: </p>
                    <p className="content" style={{ color: "teal" }}>{numberOfContestants}</p>
                </div>
                <div className="name-container">
                    <p className="header-indicator">Status: </p>
                    <p className="content" style={color}>{stateOfTournament}</p>
                </div>

            </div>
            <div className="other">
                <div className="game-image">
                    <img src={image} />
                </div>

                <div className="google-form">
                    <form className="form" action={rules}>
                        <input className="btn" type="submit" value="zasady" />
                    </form>
                    <form className="frm" action={url}>
                        <input className="npt" type="submit" value="zgłoś się" />
                    </form>
                </div>
            </div>
        </div>
    );
}