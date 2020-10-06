import { motion } from "framer-motion";
import Date from "../components/Date";
import utilStyles from "../styles/utils.module.css";
import { itemsAnimation } from "../utils/containerAnimations";

interface MotionListProps {
    title: string;
    date: string;
}

const MotionList: React.FC<MotionListProps> = ({ title, date }) => {
    return (
        <motion.li
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9, boxShadow: "none" }}
            variants={itemsAnimation}
            className={utilStyles.listItem}
        >
            <a>{title}</a>
            <br />
            <small className={utilStyles.lightText}>
                Published: <Date dateString={date} />
            </small>
        </motion.li>
    );
};

export default MotionList