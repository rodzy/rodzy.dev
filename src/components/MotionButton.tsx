import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { itemsAnimation } from "../utils/containerAnimations";

interface MotionButtonProps {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
}

const MotionButton: React.FC<MotionButtonProps> = ({
    text,
    onClick,
    className,
}) => {
    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={itemsAnimation}
                className={className}
                onClick={onClick}
            >
                {text}
            </motion.button>
        </>
    );
};

export default MotionButton;

MotionButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
