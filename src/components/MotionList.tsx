import { motion } from "framer-motion";
import Link from "next/link";
import Date from "./Date";
import utilStyles from "../styles/utils.module.css";
import { itemsAnimation } from "../utils/containerAnimations";
import { PostData } from "../types/PostTypes";
import styled from "styled-components";

interface MotionListProps {
    postData: PostData;
}

const MainWrapper = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const ContentWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const DateWrapper = styled("div")`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    @media (max-width: 700px) {
        padding-top:10px;
    }
`;

const DateContent = styled("div")`
    margin: auto;
    width: 100%;
    height: 100%;
`;


const MotionList: React.FC<MotionListProps> = ({ postData }) => {
    return (
        <Link href="/posts/[id]" as={`/posts/${postData.id}`}>
            <motion.li
                variants={itemsAnimation}
                className={utilStyles.listItem}
            >
                <MainWrapper>
                    <ContentWrapper>
                        <h3
                            style={{
                                margin: 0,
                            }}
                        >
                            {postData.title}
                        </h3>
                        <p
                            style={{
                                margin: 0,
                            }}
                        >
                            {postData.description}
                        </p>
                    </ContentWrapper>
                    <DateWrapper>
                        <DateContent>
                            <small className={utilStyles.lightText}>
                                <Date dateString={postData.date} /> <br></br>{" "}
                                {postData.eta}
                            </small>
                        </DateContent>
                    </DateWrapper>
                </MainWrapper>
            </motion.li>
        </Link>
    );
};

export default MotionList;
