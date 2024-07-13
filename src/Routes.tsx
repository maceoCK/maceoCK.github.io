import { Routes as RouterRoutes, Route } from "react-router-dom";
import { useRef } from "react";
import App from "./App";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import AllProjects from "./components/Projects/AllProjects";
import "./Routes.css";

const AppRoutes: React.FC = () => {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const topRef = useRef(null);

    return (
        <div>
            <Header
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
                topRef={topRef}
            />
            <div className="main-container">
                <RouterRoutes>
                    <Route
                        path="/"
                        element={
                            <App
                                topRef={topRef}
                                aboutRef={aboutRef}
                                projectsRef={projectsRef}
                                contactRef={contactRef}
                            />
                        }
                    />
                    <Route path="/projects" element={<AllProjects />} />
                </RouterRoutes>
            </div>
            <Footer />
        </div>
    );
};

export default AppRoutes;
