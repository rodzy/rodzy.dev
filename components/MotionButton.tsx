import { motion } from "framer-motion";
import PropTypes, { InferProps } from "prop-types";

interface MotionButtonProps {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
}

const buttons = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const MotionButton: React.FC<MotionButtonProps> = ({
    text,
    onClick,
    className,
}: InferProps<typeof MotionButton.propTypes>) => {
    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={buttons}
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
