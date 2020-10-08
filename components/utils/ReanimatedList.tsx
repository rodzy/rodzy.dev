import AnimatedItem from "./AnimatedItem";
import { AnimateSharedLayout, motion } from "framer-motion";
import { CurrentTypes } from "../../types/CurrentTypes";
import framer from "../../styles/framer.module.css";

interface ReanimatedListProps {
    currentItems: CurrentTypes;
}

const ReanimatedList: React.FC<ReanimatedListProps> = ({ currentItems }) => {
    return (
        <AnimateSharedLayout>
            <motion.ul
                layout
                initial={{ borderRadius: 25 }}
                className={framer.listAble}
            >
                {currentItems.map((item) => (
                    <AnimatedItem
                        key={item.id}
                        url={item.url}
                        description={item.description}
                    />
                ))}
            </motion.ul>
        </AnimateSharedLayout>
    );
};

export default ReanimatedList;
