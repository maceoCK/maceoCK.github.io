import Home from "./components/home/Home";
import Header from "./components/common/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useRef } from 'react';
import './App.css';

const App = () => {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const topRef = useRef(null);

    return (
        <div className="background">
            <div ref={topRef}></div>
            <Header aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} topRef={topRef} />
            <div className="container">
                <Home topRef={topRef} />
                <About aboutRef={aboutRef} />
                {/* <Projects projectsRef={projectsRef} /> */}
                <Contact contactRef={contactRef} />
            </div>
        </div>
    );
}

export default App;
