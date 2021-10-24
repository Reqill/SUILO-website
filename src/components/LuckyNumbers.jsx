import React, { useState } from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { fetchJSON } from "../FetchingData.ts"

export default function LuckyNumbers() {
    const [loaded, setLoaded] = useState(false);
    const [lnumbers, setLnumbers] = useState("");

    const generateLuckyNumbers = () => {
        if (lnumbers.luckyNumbers[0] === undefined) {
            return <p className="center-ln lnln">{`brak :c`}</p>
        }
        return lnumbers.luckyNumbers.map((el, i) => <p className="center-ln lnln">{el}{i < lnumbers.luckyNumbers.length - 1 ? "," : null}</p>)
    }
    const generateExcludedClasses = () => {
        if (lnumbers.excludedClasses[0] === undefined) {
            return <p className="right-ln lninf">{`brak :)`}</p>
        }
        return lnumbers.excludedClasses.map((el, i) => <p className="right-ln lninf">{el}{i < lnumbers.excludedClasses.length - 1 ? "," : null}</p>)
    }

    if (loaded) {
        return (
            <div className="lnumbers-container">
                <div className="nested-ln">
                    <div className="date-ln">
                        <p className="left-ln label-ln">Data:</p>
                        <p className="left-ln lninf">{String(lnumbers.date)}</p>
                    </div>
                    <div className="ln-ln">
                        <p className="center-ln label-ln">Numerki na dziś:</p>
                        <div className="generate-ln">
                            {generateLuckyNumbers()}
                        </div>
                    </div>
                    <div className="exluded-ln">
                        <p className="right-ln label-ln">Wyłączone klasy:</p>
                        <div className="generate-ex">
                            {generateExcludedClasses()}
                        </div>
                    </div>
                </div>

            </div>
        );
    } else {
        fetchJSON("https://europe-west1-lucky-numbers-suilo.cloudfunctions.net/app/api/luckyNumbers").then((res) => {
            setLnumbers(res);
            setLoaded(true);
        })
        return (
            <div className="loader-position" style={{ maxHeight: "100px" }}>
                <div className="loader-absolute">
                    <Loader type="Bars" color="#f58f0b" height={50} width={50} />
                </div>
            </div>
        );
    }
}