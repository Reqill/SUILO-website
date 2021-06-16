import image1 from "../images/homepagegraphic1.svg"
import image2 from "../images/homepagegraphic2.svg"
import image3 from "../images/homepagegraphic3.svg"

export default function HomePage() {
    const randomIntegerMod3 = (Math.floor(Math.random() * Math.floor(999))) % 3;
    let image;

    switch (randomIntegerMod3) {
        case (0):
            image = image1;
            break;
        case (1):
            image = image2;
            break;
        case (2):
            image = image3;
            break;
        default:
            image = image1;
            break;
    }

    return (
        <div className="homePage-container">
            <div className="homePage-image-container">
                <img src={image} className="homePage-image" />
            </div>
            <div className="homePage-text-container">
                <h2 className="homePage-text-left">Od uczniów,</h2>
                <h2 className="homePage-text-right"> dla uczniów</h2>
                <h2 className="homePage-text-small">SU I LO w Gliwicach</h2>
            </div>
        </div>
    );
}