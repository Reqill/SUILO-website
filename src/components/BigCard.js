import '../styles/App.css';
import react, { useState } from "react";
import placeholder from "../images/placeholder.jpg";

export default function BigCard(props) {
    const elementData = props;
    const { image, title, date, content, link } = elementData.elementData;
    const [style, setStyle] = useState("none");
    const [loaded, setLoaded] = useState(false)

    let linkage = <div />;
    let imagee;
    if (image === "none") {
        imagee = placeholder;
    } else {
        imagee = image;
    }

    if (link !== "none" & link !== "" & link !== " ") {
        linkage = <a target="_blank" href={link}>odwiedź witrynę</a>
    }

    return (
        <div className="card">
            <div className="spotlight-container">
                {loaded ? null : <img src={placeholder} className="spotlight" loading="lazy" />}
                <img src={imagee} className="spotlight" style={loaded ? {} : { display: 'none' }} onLoad={() => setLoaded(true)} />
            </div>
            <div className="bottom">
                <p>{date}</p>
                <div className="header">
                    <h3 title={title}>{title}</h3>
                </div>
                <div className="watch">
                    <button onClick={() => setStyle("flex")}>zobacz</button>
                </div>
            </div>
            <div className="post-container" style={{ display: style }}>
                <article>
                    <img src={imagee} />
                    <div className="article">
                        <h1>{title}</h1>
                        <p className="date">{date}</p>
                        <p>{content}</p>
                        {linkage}
                    </div>
                    <button onClick={() => setStyle("none")}>wróć</button>
                </article>
            </div>
        </div >
    );
}