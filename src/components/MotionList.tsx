import { motion } from "framer-motion";
import Link from "next/link";
import Date from "./Date";
import utilStyles from "../styles/utils.module.css";
import { itemsAnimation } from "../utils/containerAnimations";
import { PostData } from "../types/PostTypes";

interface MotionListProps {
    postData:PostData
}

const MotionList: React.FC<MotionListProps> = ({ postData }) => {
    return (
        <Link href="/posts/[id]" as={`/posts/${postData.id}`}>
            <motion.li
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9, boxShadow: "none" }}
                variants={itemsAnimation}
                className={utilStyles.listItem}
            >
                <a>{postData.title}</a>
                <br />
                <small className={utilStyles.lightText}>
                    <Date dateString={postData.date} /> - {postData.eta}
                </small>
            </motion.li>
        </Link>
    );
};

export default MotionList;
