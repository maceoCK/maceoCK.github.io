import React from "react";
import { Button } from "@mui/material";
import { InstagramLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import UFO from "../../assets/alien-ufo.png";
import "./Contact.css";

interface ContactProps {
    contactRef: React.RefObject<HTMLDivElement>;
}

const socialMedia = [
    {
        name: "Instagram",
        link: "https://www.instagram.com/maceo.c.k/",
        icon: InstagramLogo,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/maceo-cardinale-kwik/",
        icon: LinkedinLogo,
    },
    {
        name: "GitHub",
        link: "https://github.com/maceoCK",
        icon: GithubLogo,
    },
];

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
    return (
        <div ref={contactRef} className="contact-container">
            <div className="socialMedia">
                <h1>Follow Me Elsewhere</h1>
                <img src={UFO} alt="UFO" />
                <div className="socialMediaContainer">
                    {socialMedia.map((media) => (
                        <div className="buttonBorder1">
                            <div className="buttonBorder2">
                                <div className="buttonBorder3">
                                    <Button
                                        key={media.name}
                                        variant="text"
                                        href={media.link}
                                        target="_blank"
                                        style={{ color: "#2d60a2" }}
                                    >
                                        {React.createElement(media.icon, {
                                            size: 32,
                                        })}
                                        {media.name}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
