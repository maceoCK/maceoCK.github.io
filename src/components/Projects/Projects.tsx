import React, { useRef } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ArrowRight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Radiation from "../common/Radiation/Radiation";
import "./Projects.css";

interface Project {
    id: string;
    title: string;
    description: string;
    url: string;
}

const projectsData: Project[] = [
    {
        id: "1",
        title: "Project One",
        description: "This is the first project",
        url: "https://project-one.com",
    },
    {
        id: "2",
        title: "Project Two",
        description: "This is the second project",
        url: "https://project-two.com",
    },
    {
        id: "3",
        title: "Project Three",
        description: "This is the third project",
        url: "https://project-three.com",
    },
    {
        id: "4",
        title: "Project Four",
        description: "This is the fourth project",
        url: "https://project-four.com",
    },
];

const Projects: React.FC<{ projectsRef: React.RefObject<HTMLDivElement> }> = ({
    projectsRef,
}) => {
    const navigate = useNavigate();
    const projectRefs = useRef(
        projectsData.map(() => React.createRef<HTMLDivElement>())
    );

    return (
        <div ref={projectsRef} className="projects-container">
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            <Grid container spacing={2}>
                {projectsData.map((project, index) => (
                    <Grid
                        item
                        xs={6}
                        key={project.id}
                        ref={projectRefs.current[index]}
                    >
                        <Card style={{ margin: "10px" }} className="project-card">
                            <div
                                className="project-card-background"
                                style={{ backgroundColor: "#ffe7c4" }}
                            >
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <div className="view-more-container">
                <Radiation gap={6} borderRadius={15}>
                    <div
                        className="view-more-button"
                        onClick={() => navigate("/projects")}
                    >
                        <div className="view-more-content">
                            <p className="view-more-text">View More</p>
                            <ArrowRight weight="bold" size={24} />
                        </div>
                    </div>
                </Radiation>
            </div>
        </div>
    );
};

export default Projects;
