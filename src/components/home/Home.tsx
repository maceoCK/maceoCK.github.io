import MaceoProfile from "../../assets/Maceo.jpeg";
import "./Home.css";
import { Button } from "@mui/material";

const App: React.FC = () => {
    return (
        <div>
            <div className="info-container">
                <div className="info">
                    <h1 className="info-title hello">Hello 👋</h1>
                    <h1 className="info-title name">
                        I'm Maceo Cardinale Kwik
                    </h1>
                    <h2 className="info-subtitle">
                        I hope you enjoy your stay at my website
                    </h2>

                    <p>
                        I'm a full stack developer with a passion for creating
                        user-friendly and efficient web applications.
                    </p>
                    <div className="button-container">
                        <Button
                            variant="outlined"
                            size="large"
                            href="https://www.linkedin.com/in/maceo-cardinale-kwik/"
                            target="_blank"
                            style={{
                                borderRadius: 100,
                                border: "2px solid black",
                                color: "black",
                            }}
                        >
                            LinkedIn
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            href="https://github.com/maceoCK"
                            target="_blank"
                            style={{
                                borderRadius: 100,
                                border: "2px solid black",
                                color: "black",
                            }}
                        >
                            GitHub
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            style={{
                                borderRadius: 100,
                                border: "2px solid black",
                                color: "black",
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
