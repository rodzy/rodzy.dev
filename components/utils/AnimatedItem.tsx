import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedContent from "./AnimatedContent";

const AnimatedItem: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{isOpen && <AnimatedContent />}</AnimatePresence>
        </motion.li>
    );
};

export default AnimatedItem;
