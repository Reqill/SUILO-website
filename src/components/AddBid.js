import React, { useState, useEffect } from 'react';
import bcrypt from 'bcryptjs'

export default function AddBid({ bids }) {
    const [visible, setVisible] = useState(false)


    const handleFormSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target[0].value)
        const DATE = new Date()
        const ID = `${DATE.getDate()}${DATE.getMonth()}${DATE.getYear()}-${Math.floor(Math.random() * (9999 - 1000) + 1000)}`
        let foo = {};
        for (let i = 0; i < e.target.length - 1; i++) { //-1?
            foo[e.target[i].name] = e.target[i].value;
        }
        foo["id"] = ID;
        const salt = bcrypt.genSaltSync(10);
        foo.password = bcrypt.hashSync(foo.password, salt);

        const newBids = [foo, ...bids];
        // console.log(newBids);

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

        // console.log(foo)
        setVisible(false);
        alert("Twoje ogłoszenie zostało wysłane!");
    };

    const BidForm = () => {
        return (
            <div className="add-box">
                <div className="blackish" onClick={() => setVisible(false)} />
                <form onSubmit={e => { handleFormSubmit(e); return false; }}>
                    <div className="book-part">
                        <div className="form-info">
                            <div className="vertical-line" />
                            <p className="index-form">INFORMACJE O KSIĄŻCE</p>
                            <div className="vertical-line" />
                        </div>
                        <div className="form-container">
                            <label title="tytuł książki">Tytuł</label>
                            <input type="text" name="title" required maxlength="63" />
                        </div>
                        <div className="form-container">
                            <label title="wydawnictwo książki">Wydawnictwo</label>
                            <input type="text" name="publisher" required maxlength="63" />
                        </div>
                        <div className="form-container">
                            <label title="rok wydania">Rok</label>
                            <input type="text" type="number" name="year" required maxlength="4" placeholder="XXXX" />
                        </div>
                        <div className="form-container">
                            <label title="przedmiot">Przedmiot</label>
                            <select type="text" name="subject" required>
                                <option>biologia</option>
                                <option>chemia</option>
                                <option>matematyka</option>
                                <option>fizyka</option>
                                <option>informatyka</option>
                                <option>angielski</option>
                                <option>francuski</option>
                                <option>hiszpański</option>
                                <option>niemiecki</option>
                                <option>polski</option>
                                <option>historia</option>
                                <option>geografia</option>
                                <option>informatyka</option>
                                <option>inne</option>
                            </select>
                        </div>
                        <div className="form-container">
                            <label title="klasa dla której jest ta książka">Klasa</label>
                            <select type="text" name="grade" required >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="form-container">
                            <label title="rozszerzony /podstawowy">Poziom</label>
                            <select type="text" name="level" required>
                                <option value="podstawa">podstawa</option>
                                <option value="rozszerzenie">rozszerzenie</option>
                                <option value="SL">SL</option>
                                <option value="HL">HL</option>
                            </select>
                        </div>
                        <div className="form-container">
                            <label title="podręcznik /zeszyt-ćwiczeń /inne">Typ</label>
                            <select type="text" name="type" required >
                                <option value="podręcznik">podręcznik</option>
                                <option value="zeszyt ćwiczeń">zeszyt ćwiczeń</option>
                                <option value="inne">inne</option>
                            </select>
                        </div>
                        <div className="form-container">
                            <label title="poziom zniszczenia">Stan</label>
                            <select type="text" name="condition" required>
                                <option value="nowe">nowe</option>
                                <option value="używane - dobra jakość">używane - dobra jakość</option>
                                <option value="ślady używania">ślady używania</option>
                            </select>
                        </div>
                        <div className="form-container">
                            <label title="proponowana cena książki">Cena</label>
                            <p className="current-form">zł</p>
                            <input type="number" step="0.01" name="price" required maxlength="6" />
                        </div>
                    </div>
                    <div className="private-part">
                        <div className="form-info">
                            <div className="vertical-line" />
                            <p className="index-form">INFORMACJE O SPRZEDWCY</p>
                            <div className="vertical-line" />
                        </div>
                        <div className="form-container">
                            <label>Email <span className="bold-label">SZKOLNY</span></label>
                            <input name="email" type="email" pattern=".+@lo1\.gliwice\.pl" required maxlength="63" />
                        </div>
                        <div className="form-container">
                            <label>Hasło <span className="additional">(potrzebne, aby usunąć ogłoszenie, gdy jest nie ważne)</span></label>
                            <input name="password" type="password" required minlength="6" placeholder="minimalna długość: 6" />
                        </div>
                    </div>
                    <div className="button-row">
                        <button onClick={() => setVisible(false)} className="anuluj">anuluj</button>
                        <button type="submit" className="proceed">dodaj ogłoszenie</button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div>
            <button className="add-btn" onClick={() => setVisible(true)}>
                <p>
                    dodaj ogłoszenie
                </p>
            </button>
            {!visible ? null : <BidForm />}
        </div>

    );
}

