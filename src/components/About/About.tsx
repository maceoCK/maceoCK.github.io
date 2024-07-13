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
                setTitle(
                    "I used to be a math double major before I transfered schools"
                );
                setBody(
                    "I used to be a math double major before I transfered schools, and I still love it. I love math and its applications in real-world problems. I have done research and presented on cryptography in relation to hawking radiation and I am currently improving my skills in numerical analysis."
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
            title: "Exploring new cultures and experiencing the beauty of our world is a significant what has made me me.",
            description: "Travel Enthusiast",
            onClick: () => {
                setOpen(true);
                setTitle("My parents put an emphasis on traveing while raising me");
                setBody(
                    "My parents put an emphasis on traveing while raising me, and I still love it. I love to travel and to experience new cultures. I have visited many countries and I am always looking for new places to visit."
                );
            },
        },
        {
            id: "4",
            title: "I appreciate the art of cooking and trying new cuisines, always on the lookout for unique flavors and ingredients.",
            description: "Amateur Chef",
            onClick: () => {
                setOpen(true);
                setTitle("My family is very supportive and always on the lookout for unique flavors and ingredients.");
                setBody(
                    "My family is very supportive and always on the lookout for unique flavors and ingredients. We always try new things and I am always looking for new recipes to try."
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
