import { motion } from "framer-motion";
import framer from "../../styles/framer.module.css";

interface Props{
    description: string;
}

const AnimatedContent: React.FC<Props> = ({description}) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={framer.row} >
                {description}
            </div>
            <div className={framer.row} />
            <div className={framer.row} />
        </motion.div>
    );
};

export default AnimatedContent;
