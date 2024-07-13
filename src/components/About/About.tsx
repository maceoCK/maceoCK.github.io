import "./About.css";
import Card from "../common/Card/Card";
import Popup from "../common/Popup/Popup";
import { useState } from "react";

interface AboutProps {
    aboutRef: React.RefObject<HTMLDivElement>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const cardsData = [
        {
            id: "1",
            title: "I have a strong passion for mathematics and its applications in real-world problems.",
            description: "Math Enthusiast",
            onClick: () => {
                setOpen(true);
                setTitle("Mathway");
                setBody(
                    "Mathway is a website that allows you to plan your own travel. It is a great resource for anyone who wants to plan a trip."
                );
            },
        },
        {
            id: "2",
            title: "With a solid foundation in computer science, I excel in developing efficient and scalable software solutions.",
            description: "Coding Expert",
            onClick: () => {
                setOpen(true);
                setTitle("GitHub");
                setBody(
                    "GitHub is a website that allows you to plan your own travel. It is a great resource for anyone who wants to plan a trip."
                );
            },
        },
        {
            id: "3",
            title: "Exploring new cultures and experiencing the beauty of our world is a significant part of my life.",
            description: "Travel Adventurer",
            onClick: () => {
                setOpen(true);
                setTitle("Lonely Planet");
                setBody(
                    "Lonely Planet is a website that allows you to plan your own travel. It is a great resource for anyone who wants to plan a trip."
                );
            },
        },
        {
            id: "4",
            title: "I appreciate the art of cooking and trying new cuisines, always on the lookout for unique flavors and ingredients.",
            description: "Food Connoisseur",
            onClick: () => {
                setOpen(true);
                setTitle("Food Network");
                setBody(
                    "Food Network is a website that allows you to plan your own travel. It is a great resource for anyone who wants to plan a trip."
                );
            },
        },
    ];

    return (
        <div ref={aboutRef} className="about-container">
            <div className="bulletin-board">
                <div className="bulletin-board-title">
                    <h2 className="bulletin-board-title-text">Who am I?</h2>
                </div>
                <div className="bulletin-container">
                    {cardsData.map((card) => (
                        <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            onclick={card.onClick}
                        />
                    ))}
                </div>
            </div>
            <Popup
                open={open}
                onClose={() => setOpen(false)}
                title={title}
                body={body}
            />
        </div>
    );
};

export default About;
