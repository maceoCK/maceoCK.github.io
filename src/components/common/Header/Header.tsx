import { AppBar, Toolbar, Button, ButtonProps } from "@mui/material";
import { useEffect, useState } from "react";
import "./Header.css";

interface HeaderProps {
    topRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({
    aboutRef,
    projectsRef,
    contactRef,
    topRef,
}: HeaderProps) => {
    const [buttonSize, setButtonSize] = useState<ButtonProps["size"]>("large");
    const [buttonStyle, setButtonStyle] = useState<ButtonProps["style"]>({});

    useEffect(() => {
        const handleResize = () => {
            setButtonSize(window.outerWidth > 968 ? "large" : "small");
            setButtonStyle(
                window.outerWidth < 1368
                    ? {
                          border: "2px solid black",
                          borderRadius: "10px",
                          color: "black",
                          fontSize: "calc(0.5vw + 10px)",
                      }
                    : {
                          border: "2px solid black",
                          borderRadius: "10px",
                          color: "black",
                          fontSize: "20px",
                      }
            );
        };

        window.addEventListener("resize", handleResize);

        // Call handleResize initially in case the window size is already below 968px
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="header-container">
            <AppBar
                position="static"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    backgroundColor: "#ffe7c4",
                    boxShadow: "none",
                }}
            >
                <Toolbar>
                    <div
                        className="title-container"
                        onClick={() => scrollToRef(topRef)}
                    >
                        <p className="title">MACEO CARDINALE KWIK</p>
                    </div>
                    <div className="button-container">
                        <Button
                            className="button"
                            onClick={() => {
                                if (aboutRef.current) {
                                    window.scrollTo({
                                        top: aboutRef.current.offsetTop - 100,
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            style={buttonStyle}
                            size={buttonSize}
                        >
                            About
                        </Button>
                        <Button
                            className="button"
                            onClick={() => {
                                if (projectsRef.current) {
                                    window.scrollTo({
                                        top:
                                            projectsRef.current.offsetTop - 100,
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            style={buttonStyle}
                            size={buttonSize}
                        >
                            Projects
                        </Button>
                        <Button
                            className="button"
                            onClick={() => {
                                if (contactRef.current) {
                                    window.scrollTo({
                                        top: contactRef.current.offsetTop,
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            variant="outlined"
                            color="primary"
                            style={buttonStyle}
                            size={buttonSize}
                        >
                            Contact
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
