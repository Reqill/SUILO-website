import { useState, useEffect } from "react";
import { baseApiLink } from "../commonData";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const AfterTime = ({ colors, changeCard }) => {
    const [votes, setVotes] = useState([]);
    const [waitingForServer, setWaitingForServer] = useState(false);
    const [specialMessage, setSpecialMessage] = useState("");
    useEffect(() => {
        setWaitingForServer(true);
        fetch(baseApiLink + "/votes").then(response => response.json()).then(data => {
            if (data.errorMessage === undefined) {
                setVotes(data.sort((a, b) => b.votes - a.votes));

            } else {
                setSpecialMessage(data.errorMessage);
            }
            setWaitingForServer(false);
        })
    }, [])
    const _createCandidateDisplay = (candidate) => {
        return <p key={candidate.fullName}>{candidate.fullName} zdobył {candidate.votes} głosów</p>;
    }
    return (
        <p>
            {waitingForServer ? <Loader type="Bars" color={colors.primary} height={40} width={40} /> :
                specialMessage !== "" ? specialMessage :
                    votes.map(_createCandidateDisplay)}
            <div className="center" style={{ width: "95%" }}>
                <p className="support-text">Możesz wspomóc nasz rozwój stawiając nam kawę, oraz dodając w wiadomości: 'suilo głosowanie'</p>
                <a href="https://buycoffee.to/mikixm" target="_blank">
                    <img src="https://buycoffee.to/btn/buycoffeeto-btn-primary.svg" style={{ width: "150px" }} alt="Postaw mi kawę na buycoffee.to" />
                </a>
            </div>
        </p>
    )
}

export default AfterTime;
