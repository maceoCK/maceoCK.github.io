import MaceoProfile from "../../assets/Maceo.jpeg";
import "./Home.css";
import { Box, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import Radiation from "../common/Radiation/Radiation";
import { Document, Page, pdfjs } from "react-pdf";
import { Modal } from "@mui/material";
import resume from "../../assets/Maceo_Cardinale_Kwiks_Resume.pdf";

interface HomeProps {
    topRef: React.RefObject<HTMLDivElement>;
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

const Home: React.FC<HomeProps> = ({ topRef }) => {
    const [buttonSize, setButtonSize] = useState<"large" | "small">("large");
    const [open, setOpen] = useState(false);

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
        <div className="home-container" ref={topRef}>
            <div className="info-container">
                <div className="info">
                    <h1 className="info-title hello">Hello 👋</h1>
                    <h1 className="info-title name">
                        I'm{" "}
                        <span className="name-highlight">
                            Maceo Cardinale Kwik
                        </span>
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
                            onClick={() => setOpen(true)}
                        >
                            Resume
                        </Button>
                    </div>
                </div>
                <div className="profile-image-container">
                    <Radiation>
                        <img
                            className="profile-image"
                            src={MaceoProfile}
                            alt="Maceo Cardinale Kwik"
                        />
                    </Radiation>
                </div>
            </div>
            <div
                className="resume-container"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Modal open={open} onClose={() => setOpen(false)}>
                    <div
                        className="backdrop"
                        onClick={() => setOpen(false)}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                height: "90vh",
                                width: "60vh",
                                bgcolor: "background.paper",
                                borderRadius: 10,
                                boxShadow: 24,
                                backgroundColor: "rgba(50, 100, 180, 0.5)",
                                p: 4,
                            }}
                        >
                            <IconButton
                                aria-label="close"
                                onClick={() => setOpen(false)}
                                sx={{
                                    position: "absolute",
                                    right: 8,
                                    top: 8,
                                    color: "white",
                                }}
                            ></IconButton>
                            <embed
                                src={resume}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Box>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Home;
