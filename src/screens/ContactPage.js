import image from "../images/contactpagegraphic.svg"
import discordIcon from "../images/discord.svg"
import facebookIcon from "../images/facebook.svg"
import gmailIcon from "../images/gmail.svg"

export default function ContactPage() {
    return (
        <div className="contactPage-container">
            <div className="contactPage-image-container">
                <img src={image} className="contactPage-image" />
            </div>
            <div className="contactPage-text-container">
                <h2 className="contactPage-text-header">Skontaktuj się z nami poprzez:</h2>
                <div className="icons">
                    <a style={{ textDecoration: "none" }} target="_blank" href="https://www.facebook.com/SUILOGliwice">
                        <div className="icons-container">
                            <img src={facebookIcon} className="fb-icon" />
                            <p className="link">Facebook</p>
                        </div>
                    </a>
                    <a style={{ textDecoration: "none" }} target="_blank" href={"https://discord.gg/upPdWMc8GJ"}>
                        <div className="icons-container">
                            <img src={discordIcon} className="dc-icon" />
                            <p className="link dc">Discord</p>
                        </div>
                    </a>
                    <a style={{ textDecoration: "none" }} target="_blank" href="mailto: su.lo1.gliwice@gmail.com" onClick={() => alert("mail: su.lo1.gliwice@gmail.com")}>
                        <div className="icons-container">
                            <img src={gmailIcon} className="gm-icon" />
                            <p className="link gm">eMail</p>
                        </div>
                    </a>
                </div>
            </div>
        </div >
    );
}