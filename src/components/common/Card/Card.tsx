import { useMemo, forwardRef, RefObject } from "react";
import { motion, Variants, InertiaOptions } from "framer-motion";
import { ArrowsOutSimple, Icon } from "@phosphor-icons/react";

import "./Card.css";

interface Project {
    id: string;
    title: string;
    description: string;
    onclick: () => void;
    color?: string;
    accent?: string;
    theme?: string;
    Icon?: Icon;
    dragConstraints?: RefObject<HTMLDivElement>; // Add dragConstraints to the interface
}

const dragTransition: InertiaOptions = { timeConstant: 50, power: 0.1 };

const Card = forwardRef<HTMLDivElement, Project>(
    ({
        id,
        title,
        description,
        onclick,
        color = "#000000",
        accent = "#ADD8E6",
        Icon = ArrowsOutSimple,
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
                    <h2 onClick={onclick} className="card-description">
                        {description}
                    </h2>
                    <p style={{ flex: 1 }}>{title}</p>
                </motion.div>
            </div>
        );
    }
);

Card.displayName = "Card";

export default Card;
