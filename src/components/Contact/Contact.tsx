import React from "react";
import { Button } from "@mui/material";
import { InstagramLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import UFO from "../../assets/alien-ufo.png";
import "./Contact.css";
import Radiation from "../common/Radiation/Radiation";

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
                        <Radiation gap={6} borderRadius={40}>
                            <Button
                                key={media.name}
                                variant="text"
                                href={media.link}
                                target="_blank"
                                style={{
                                    color: "#2d60a2",
                                    borderRadius: "60px",
                                }}
                            >
                                {React.createElement(media.icon, {
                                    size: 32,
                                })}
                                {media.name}
                            </Button>
                        </Radiation>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
