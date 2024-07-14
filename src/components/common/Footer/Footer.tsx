import { AppBar, Toolbar } from "@mui/material";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <AppBar
                position="static"
                className="footer"
                style={{
                    top: "auto",
                    bottom: 0,
                    backgroundColor: "#ffe7c4",
                    boxShadow: "none",
                    width: "100vw",
                    marginTop: "50px",
                }}
            >
                <Toolbar style={{ justifyContent: "left" }}>
                    <p style={{ color: "black", fontSize: "12px" }}>
                        © 2024 Maceo Cardinale Kwik. All rights reserved.
                    </p>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Footer;
