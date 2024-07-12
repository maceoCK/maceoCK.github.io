import MaceoProfile from "../../assets/Maceo.jpeg";
import "./Home.css";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const App: React.FC = () => {
    const [buttonSize, setButtonSize] = useState<"large" | "small">("large");

    useEffect(() => {
        const handleResize = () => {
            setButtonSize(window.outerWidth > 968 ? "large" : "small");
        };

        window.addEventListener("resize", handleResize);

        // Call handleResize initially in case the window size is already below 968px
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    console.log(buttonSize);
    return (
        <div className="home-container">
            <div className="info-container">
                <div className="info">
                    <h1 className="info-title hello">Hello 👋</h1>
                    <h1 className="info-title name">
                        I'm Maceo Cardinale Kwik
                    </h1>
                    <h2 className="info-subtitle">
                        I hope you enjoy your stay at my website
                    </h2>

                    <p className="info-description">
                        I'm a full stack developer with a passion for creating
                        user-friendly and efficient web applications.
                    </p>
                    <div className="home-button-container">
                        <Button
                            variant="outlined"
                            size={buttonSize}
                            href="https://www.linkedin.com/in/maceo-cardinale-kwik/"
                            target="_blank"
                            style={{
                                borderRadius: 100,
                                border: "2px solid black",
                                color: "black",
                                fontSize: "calc(0.25vw + 10px)",
                            }}
                        >
                            LinkedIn
                        </Button>
                        <Button
                            variant="outlined"
                            size={buttonSize}
                            href="https://github.com/maceoCK"
                            target="_blank"
                            style={{
                                borderRadius: 100,
                                border: "2px solid black",
                                color: "black",
                                fontSize: "calc(0.25vw + 10px)",
                            }}
                        >
                            GitHub
                        </Button>
                        <Button
                            variant="outlined"
                            size={buttonSize}
                            style={{
                                borderRadius: 100,
                                border: "2px solid black",
                                color: "black",
                                fontSize: "calc(0.25vw + 10px)",
                            }}
                        >
                            Resume
                        </Button>
                    </div>
                </div>
                <div className="profile-image-container">
                    <div className="profile-image-border-1">
                        <div className="profile-image-border-2">
                            <div className="profile-image-border-3">
                                <img
                                    className="profile-image"
                                    src={MaceoProfile}
                                    alt="Maceo Cardinale Kwik"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
