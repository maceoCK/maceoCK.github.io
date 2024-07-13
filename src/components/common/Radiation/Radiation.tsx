import "./Radiation.css";

interface RadiationProps {
    children: React.ReactNode;
    gap?: number;
    borderRadius?: number;
}

const Radiation: React.FC<RadiationProps> = ({
    children,
    gap,
    borderRadius,
}) => {
    return (
        <div className="radiation-container">
            <div
                className="radiation-border-1"
                style={{
                    padding: gap ? gap : "calc(0.5vw + 5px)",
                    borderRadius: borderRadius ? borderRadius : "10%",
                }}
            >
                <div
                    className="radiation-border-2"
                    style={{
                        padding: gap ? gap : "calc(0.5vw + 5px)",
                        borderRadius: borderRadius ? borderRadius : "10%",
                    }}
                >
                    <div
                        className="radiation-border-3"
                        style={{
                            padding: gap ? gap : "calc(0.5vw + 5px)",
                            borderRadius: borderRadius ? borderRadius : "10%",
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Radiation;
