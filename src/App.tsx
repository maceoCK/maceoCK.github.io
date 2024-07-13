import Home from "./components/home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.css";

interface AppProps {
    topRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

const App = ({ topRef, aboutRef, projectsRef, contactRef }: AppProps) => {
    return (
        <div className="background">
            <div className="container">
                <Home topRef={topRef} />
                <About aboutRef={aboutRef} />
                <Projects projectsRef={projectsRef} />
                <Contact contactRef={contactRef} />
            </div>
        </div>
    );
};

export default App;
