import React, { useRef } from 'react';
import Card from '../common/Card/Card';

interface Project {
    id: string;
    title: string;
    description: string;
    url: string;
}

const projectsData: Project[] = [
    { id: '1', title: 'Project One', description: 'This is the first project', url: 'https://project-one.com' },
    { id: '2', title: 'Project Two', description: 'This is the second project', url: 'https://project-two.com' },
    { id: '3', title: 'Project Three', description: 'This is the third project', url: 'https://project-three.com' }
];

const Projects: React.FC<{ projectsRef: React.RefObject<HTMLDivElement> }> = ({ projectsRef }) => {
    const projectRefs = useRef(projectsData.map(() => React.createRef<HTMLDivElement>()));

    return (
        <div ref={projectsRef} className="projects-container">
            {projectsData.map((project, index) => (
                <Card
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    url={project.url}
                    dragConstraints={projectRefs.current[index]}
                />
            ))}
        </div>
    );
};

export default Projects;
