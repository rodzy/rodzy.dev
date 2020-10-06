import { motion } from "framer-motion";
import Link from "next/link";
import Date from "../components/Date";
import utilStyles from "../styles/utils.module.css";
import { itemsAnimation } from "../utils/containerAnimations";

interface MotionListProps {
    id: string;
    title: string;
    date: string;
}

const MotionList: React.FC<MotionListProps> = ({ id, title, date }) => {
    return (
        <Link href="/posts/[id]" as={`/posts/${id}`}>
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
        </Link>
    );
};

export default MotionList;
