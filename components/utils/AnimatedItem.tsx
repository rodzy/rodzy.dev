import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedContent from "./AnimatedContent";
import framer from "../../styles/framer.module.css";

interface Props {
    name: string;
    description: string;
    url: string;
}

const AnimatedItem: React.FC<Props> = ({ url, description, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li
            layout
            onClick={toggleOpen}
            initial={{ borderRadius: 10 }}
            className={framer.listItems}
        >
            <motion.div className={framer.avatar} layout>
                <div
                    style={{ display: "flex", backgroundColor: "transparent" }}
                >
                    <img
                        src={url}
                        alt="Logo"
                        style={{
                            backgroundColor: "transparent",
                            marginRight: 20,
                        }}
                    />
                    {name}
                </div>
            </motion.div>
            <AnimatePresence>
                {isOpen && <AnimatedContent description={description} />}
            </AnimatePresence>
        </motion.li>
    );
};

export default AnimatedItem;
