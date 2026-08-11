import "../css/others.css"
import { Link } from "react-router-dom"
import { useRef } from "react"
import { LeftArrow, RightArrow } from "./components/nav_arrow"
import pic_001 from "../assets/photos/fisher_001.jpeg"
import pic_002 from "../assets/photos/fisher_002.jpeg"
import pic_003 from "../assets/photos/fisher_003.jpeg"
import pic_004 from "../assets/photos/fisher_004.jpeg"
import pic_005 from "../assets/photos/fisher_005.jpeg"
import pic_006 from "../assets/photos/fisher_006.jpeg"
import pic_007 from "../assets/photos/fisher_007.jpeg"
import pic_008 from "../assets/photos/fisher_008.jpeg"

const cards = [
    {
        id: 1,
        image: pic_001,
        description: "check out these products",
        nav: "advertisement",
    },
    {
        id: 2,
        image: pic_002,
        description: "short and clean",
        nav: "advertisement",
    },
    {
        id: 3,
        image: pic_003,
        description: "short and clean",
        nav: "advertisement",
    },
    {
        id: 4,
        image: pic_004,
        description: "short and clean",
        nav: "advertisement",
    },
    {
        id: 5,
        image: pic_005,
        description: "short and clean",
        nav: "advertisement",
    },
    {
        id: 6,
        image: pic_006,
        description: "short and clean",
        nav: "advertisement",
    },
    {
        id: 7,
        image: pic_007,
        description: "short and clean",
        nav: "advertisement",
    },
    {
        id: 8,
        image: pic_008,
        description: "short and clean",
        nav: "advertisement",
    },
]

const Picture = ({Image,description, navigate}) => {
    return (
        <div className="picture">
            <img src={Image} alt="Picture" />
            <div className="pic-info">
                <p>{description}</p>
                <button><Link to={navigate}>See More... </Link></button>
            </div>
        </div>
    )
}
const Others = () => {
    const Pictures = useRef(null);
    const LeftClick = () => {
        Pictures.current.scrollBy({
            left: -200,
            behavior: "smooth"
        })
    }
    const RightClick = () => {
        Pictures.current.scrollBy({
            left: 200,
            behavior: "smooth"
        })
    }
    return (
        <section className="others">
            <div className="others-content">
                <q>A great car doesn't just take you places &mdash; it tells a story.</q>
                <p>Outside of being mesmerized by cars, you’ll usually find me chasing new adventures, exploring exciting places, creating engaging car content, or spending quality time with family and friends. I love staying active, seeking new experiences, and making every moment count—whether it’s behind the wheel or out in the world.</p>
                <div className="others-container">
                    <div className="others-pictures" ref={Pictures}>
                        {cards.map((picture) => (
                            <Picture key={picture.id} Image={picture.image} navigate={picture.nav} description={picture.description}/>
                        ))}
                    </div>
                        <LeftArrow onClick={LeftClick}/>
                        <RightArrow onClick={RightClick} />
                </div>
            </div>
        </section>
    )
}

export default Others;