import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedContent from "./AnimatedContent";
import framer from "../../styles/framer.module.css";

interface Props{
    description: string;
    url: string;
}

const AnimatedItem: React.FC<Props> = ({url,description}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li
            layout
            onClick={toggleOpen}
            initial={{ borderRadius: 10 }}
            className={framer.listItems}
        >
            <motion.div className={framer.avatar} layout >
                <img src={url} alt="Logo"/>
            </motion.div>
            <AnimatePresence>{isOpen && <AnimatedContent description={description} />}</AnimatePresence>
        </motion.li>
    );
};

export default AnimatedItem;
