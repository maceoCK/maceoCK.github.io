import { AppBar, Toolbar, Button } from "@mui/material";
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
}) => {
    const scrollToRef = (ref: any) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
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
                            style={{
                                color: "black",
                                backgroundColor: "paleblue",
                            }}
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
                            style={{
                                color: "black",
                                backgroundColor: "paleblue",
                            }}
                        >
                            Projects
                        </Button>
                        <Button
                            className="button"
                            onClick={() => scrollToRef(contactRef)}
                            variant="outlined"
                            color="primary"
                            style={{
                                border: "2px solid black",
                                borderRadius: "10px",
                                color: "black",
                            }}
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
