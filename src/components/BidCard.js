import React, { useState, useEffect } from 'react'
import { Book, Trash2 } from 'react-feather'
import bcrypt from 'bcryptjs'

export default function BidCard({ elementData, idx, filter, bids }) {
    const {
        id,
        password,
        email,
        facebook,
        title,
        level,
        subject,
        year,
        type,
        condition,
        grade,
        publisher,
        price,
    } = elementData
    let currentSubject = subject;
    let img;

    const BIOLOGY_IMG = "https://media.springernature.com/w580h326/nature-cms/uploads/collections/FP-Syn-Bio_hero-hi-res-cd49957f1e067a783326b9338ef8a119.jpg";
    const CHEMISTRY_IMG = "https://d1ymz67w5raq8g.cloudfront.net/Pictures/460x307//4/1/6/17416_3organicchemistrybackground_619603.jpg";
    const MATH_IMG = "https://i.imgur.com/wCQLBPE.png";
    const HISTORY_IMG = "https://911821.smushcdn.com/2227390/wp-content/themes/alexander/assets/img/subject-history.jpg";
    const ENGLISH_IMG = "https://images.prismic.io/etswebsiteprod/1ece52b2c9683b045136669c4f3ec12e40551446_alphabet-close-up-communication-256417.jpg";
    const GEOGRAPHY_IMG = "https://blavida.com/wp-content/uploads/2018/08/History.png"
    const POLISH_IMG = "https://ocdn.eu/pulscms-transforms/1/tkTk9kpTURBXy84YmU2YWI0YjI1NzhiYmYwYmI1OWIxMzAyYTRiODc0MS5qcGeSlQMAb80CEc0BKZMFzQMMzQFogaEwBQ";
    const CS_IMG = "https://miro.medium.com/max/12032/0*VB5zcgdLaFDP7Fuq";
    const PHYSICS_IMG = "https://www.ryerson.ca/content/dam/physics/images/hompage/Department_Physics.jpg";
    const GERMAN_IMG = "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/05/06/100710217-100710217-German-flag-storm-clouds.jpg?v=1369768104";
    const SPANISH_IMG = "https://www.thoughtco.com/thmb/pc54LSnJZ0d0Buvry1swnr3sIw0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/spanish-on-blackboard-596d75c122fa3a00111f7fc9.jpg";
    const FRENCH_IMG = "https://edraak-marketing-uploads.edraak.org/Courses/French-Course-Image1%20(1).jpg";
    const OTHER_IMG = "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?";

    const start = () => {
        switch (currentSubject) {
            case "biologia":
                img = BIOLOGY_IMG;
                return;
            case "chemia":
                img = CHEMISTRY_IMG;
                return;
            case "matematyka":
                img = MATH_IMG;
                return;
            case "geografia":
                img = GEOGRAPHY_IMG;
                return;
            case "fizyka":
                img = PHYSICS_IMG;
                return;
            case "historia":
                img = HISTORY_IMG;
                return;
            case "informatyka":
                img = CS_IMG;
                return;
            case "polski":
                img = POLISH_IMG;
                return;
            case "angielski":
                img = ENGLISH_IMG;
                return;
            case "francuski":
                img = FRENCH_IMG;
                return;
            case "niemiecki":
                img = GERMAN_IMG;
                return;
            case "hiszpański":
                img = SPANISH_IMG;
                return;
            default:
                currentSubject = "inne";
                img = OTHER_IMG;
                return;
        }
    }
    start();


    const handleDelete = () => {
        const boo = prompt("Aby usunąć ofertę musisz podać hasło wybrane przy jej tworzeniu:");
        if (boo !== null) {
            if (bcrypt.compareSync(boo, password)) {
                let newBids = [];

                for (let i = 0; i < bids.length; i++) {
                    if (bids[i].id !== id) {
                        newBids.unshift(bids[i])
                    }
                }

                if (newBids[0] === undefined) {
                    newBids.push({
                        condition: "nowe",
                        email: "su.lo1.gliwice@gmail.com",
                        grade: "2",
                        id: "000000000",
                        id2: "$2a$10$PZPvxKCX4iX22B.4q6CKG.",
                        level: "rozszerzenie",
                        password: "$2a$10$PZPvxKCX4iX22B.4q6CKG.wE/vkTrjXCT9pBGdBL3W7YmrXB8o4ey",
                        price: "NaN",
                        publisher: "Mikołaj Mrózek",
                        subject: "informatyka",
                        title: "serwis kiermaszowy",
                        type: "inne",
                        year: "2021",
                    })
                }

                let req = new XMLHttpRequest();
                req.onreadystatechange = () => {
                    if (req.readyState == XMLHttpRequest.DONE) {
                        // console.log(req.responseText);
                    }
                };
                req.open("PUT", "https://api.jsonbin.io/b/60ca2f468ea8ec25bd0e4f89", true);
                req.setRequestHeader("Content-Type", "application/json");
                req.setRequestHeader("X-Master-Key", "$2b$10$VYoFNtra2PIuna0hMpGDbOgI/YUNCLp7.Itnsabe75rtXjSJ83b7K");
                req.send(JSON.stringify(newBids));


                alert("Oferta usunięta. Odśwież stronę, aby zobaczyć zmiany.")
            } else {
                alert("Niepoprawne hasło!")
            }
        }
    }

    if (filter.length === 0 || filter.includes(currentSubject)) {
        return (
            <div className="bid-card">
                <div className="delete" onClick={() => handleDelete()}>
                    <Trash2 size={24} color="#ff000d" className="trash" />
                </div>
                <a href={`mailto:${email}`}>
                    <img src={img} alt="" className="bid-image" />
                    <div className="bid-info">
                        <div className="bid-top-row">
                            <div className="bid-subject-group">
                                <Book size={14} className="bid-book-icon" style={{ marginLeft: "-2px" }} />
                                <p className="bid-subject">{subject}</p>
                            </div>
                            <div className="bid-grade-group">
                                <p className="bid-grade">klasa {grade}</p>
                                <p classname="bid-level">&nbsp;· {level}</p>
                            </div>
                        </div>
                        <div className="bid-middle-row">
                            <p className="bid-title" title={title}>{title}</p>
                            <p className="bid-other">Wydanie: &nbsp;<span className="bid-infoo">{publisher} - {year} rok</span></p>
                            <p className="bid-other">Typ: &nbsp;<span className="bid-infoo">{type}</span></p>
                            <p className="bid-other">Stan: &nbsp;<span className="bid-infoo">{condition}</span></p>
                        </div>
                        <div className="bid-bottom-row">
                            <div className="bid-email-group">
                                <p className="bid-email-label">kontakt mailowy:</p>
                                <p className="bid-email" title={email}>{email}</p>
                            </div>
                            <div className="bid-price-group">
                                <p classname="bid-price-label">cena:</p>
                                <p className="bid-price">
                                    {price}
                                    <span className="bid-price-current">zł</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        );
    } else {
        return null;
    }
}