import './About.css';
import Card from '../common/Card/Card';

interface AboutProps {
    aboutRef: React.RefObject<HTMLDivElement>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
    const cardsData = [
        { id: "1", title: "I have a strong passion for mathematics and its applications in real-world problems.", description: "Math Enthusiast", url: "https://www.mathway.com" },
        { id: "2", title: "With a solid foundation in computer science, I excel in developing efficient and scalable software solutions.", description: "Coding Expert", url: "https://www.github.com" },
        { id: "3", title: "Exploring new cultures and experiencing the beauty of our world is a significant part of my life.", description: "Travel Adventurer", url: "https://www.lonelyplanet.com" },
        { id: "4", title: "I appreciate the art of cooking and trying new cuisines, always on the lookout for unique flavors and ingredients.", description: "Food Connoisseur", url: "https://www.foodnetwork.com" }
    ];

    return (
        <div ref={aboutRef} className="about-container">
            <div className="bulletin-board">
                <div className="bulletin-board-title">
                    <h2 className="bulletin-board-title-text">Who am I?</h2>
                </div>
                <div className="bulletin-container">
                    {cardsData.map((card) => (
                        <Card key={card.id} id={card.id} title={card.title} description={card.description} url={card.url} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
