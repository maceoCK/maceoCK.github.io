import { AppBar, Toolbar, Button, ButtonProps } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
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
                          fontWeight: "bold",
                      }
                    : {
                          border: "2px solid black",
                          borderRadius: "10px",
                          color: "black",
                          fontSize: "calc(0.25vh + 15px)",
                          fontWeight: "bold",
                      }
            );
        };

        window.addEventListener("resize", handleResize);

        // Call handleResize initially in case the window size is already below 968px
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        navigate("/", {
            state: {
                scrollToRef: ref?.current?.offsetTop,
            },
        });
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop - 100,
                behavior: "smooth",
            });
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
                                scrollToRef(aboutRef);
                            }}
                            style={buttonStyle}
                            size={buttonSize}
                        >
                            About
                        </Button>
                        <Button
                            className="button"
                            onClick={() => scrollToRef(projectsRef)}
                            style={buttonStyle}
                            size={buttonSize}
                        >
                            Projects
                        </Button>
                        <Button
                            className="button"
                            onClick={() => scrollToRef(contactRef)}
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
