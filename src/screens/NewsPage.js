import BigCard from '../components/BigCard.js'
import React, { useState } from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { fetchJSON } from "../FetchingData.ts"
import sortJsonArray from 'sort-json-array'

const generateNews = (props) => {
    const sort = sortJsonArray(props, 'postID', 'des')
    return sort.map((el, i) => <BigCard elementData={el} i={i} />)
}

export default function NewsPage() {
    const [loaded, setLoaded] = useState(false);
    const [news, setNews] = useState("");

    if (loaded) {
        return (
            <div className="main-grid">
                {generateNews(news)}
            </div>
        );
    } else {
        fetchJSON("https://api.npoint.io/91d54deada8648c12585").then((res) => {
            setNews(res);
            setLoaded(true);
        })
        return (
            <div className="loader-position">
                <div className="loader-absolute">
                    <Loader type="Bars" color="#f58f0b" height={50} width={50} />
                </div>
            </div>
        );
    }
}