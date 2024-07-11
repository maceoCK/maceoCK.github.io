import React from 'react';
import { Button } from '@mui/material';
import { InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import './Contact.css';


interface ContactProps {
    contactRef: React.RefObject<HTMLDivElement>;
}

const socialMedia = [
    {
        name: "Instagram",
        link: "https://www.instagram.com/yourhandle/",
        icon: InstagramLogo
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/yourlinkedin/",
        icon: LinkedinLogo
    },
    {
        name: "GitHub",
        link: "https://github.com/yourgithub",
        icon: GithubLogo
    }
]

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
    return (
        <div ref={contactRef} className="contact-container">
            <h1>Stay in touch</h1>
            <div className="SocialMedia">
                <h3>Follow Me Elsewhere</h3>
                <div className="socialMediaContainer">
                    {socialMedia.map((media) => (
                        <div className="buttonBorder1">
                            <div className="buttonBorder2">
                                <div className="buttonBorder3">
                                    <Button key={media.name} variant="text" href={media.link} style={{ color: '#1A1FCD' }}>
                                        {React.createElement(media.icon, { size: 32 })}
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