import { useMemo, forwardRef, RefObject, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, Variants, InertiaOptions } from "framer-motion";
import { ArrowsOutSimple, Icon } from "@phosphor-icons/react";

import "./Card.css";

interface Project {
    id: string;
    title: string;
    description: string;
    url: string;
    color?: string;
    accent?: string;
    theme?: string;
    Icon?: Icon;
    content?: ReactNode;
    dragConstraints?: RefObject<HTMLDivElement>; // Add dragConstraints to the interface
}

const dragTransition: InertiaOptions = { timeConstant: 50, power: 0 };

const Card = forwardRef<HTMLDivElement, Project>(
    ({
        id,
        title,
        description,
        color = "#000000",
        accent = "#ADD8E6",
        Icon = ArrowsOutSimple,
        content,
        dragConstraints, // Add dragConstraints to the destructured props
        ...rest
    }) => {
        const variants: Variants = useMemo(() => {
            return {
                start: { bottom: "-50%", left: "50%", zIndex: 1 },
                end: {
                    bottom: `${Math.floor(Math.random() * 40)}%`,
                    left: `${Math.floor(Math.random() * 80)}%`,
                    rotate: (Math.random() - 0.5) * 30,
                    transition: { duration: 0.4, delay: Math.random() / 3 },
                },
                hover: {
                    color,
                    backgroundColor: accent,
                    zIndex: 2,
                    transition: { duration: 0 },
                },
                dragging: {
                    cursor: "grabbing",
                    color,
                    backgroundColor: accent,
                    zIndex: 2,
                    transition: { duration: 0.05 },
                },
            };
        }, [color, accent]);

        return (
            <div className="card-container">
                <motion.div
                    className="card"
                    layout
                    variants={variants}
                    initial="start"
                    animate="end"
                    whileHover="hover"
                    whileTap="dragging"
                    drag
                    dragConstraints={dragConstraints} // Use the passed dragConstraints directly
                    dragTransition={dragTransition}
                    {...rest}
                >
                    <Icon size={32} />
                    <Link to={`${id}`}>
                        <h2>{description}</h2>
                    </Link>
                    <p style={{ flex: 1 }}>{title}</p>
                </motion.div>
            </div>
        );
    }
);

Card.displayName = "Card";

export default Card;
