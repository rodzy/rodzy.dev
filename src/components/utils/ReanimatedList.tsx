import AnimatedItem from "./AnimatedItem";
import { AnimateSharedLayout, motion } from "framer-motion";
import { CurrentTypes } from "../../types/CurrentTypes";
import framer from "../../styles/framer.module.css";
import IndicatorProvider from "../../hooks/IndicatorContext";

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
                    <IndicatorProvider key={item.id}>
                        <AnimatedItem
                            url={item.url}
                            description={item.description}
                            name={item.name}
                        />
                    </IndicatorProvider>
                ))}
            </motion.ul>
        </AnimateSharedLayout>
    );
};

export default ReanimatedList;
