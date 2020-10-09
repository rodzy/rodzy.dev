import { GetStaticProps, NextPage } from "next";
import TheLayout from "../components/TheLayout";
import { AllPosts } from "../types/PostsTypes";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { motion } from "framer-motion";
import { containerAnimation } from "../utils/containerAnimations";
import MotionList from "../components/MotionList";
import Seo from "../components/SEO";
import { PostData } from '../types/PostTypes';

interface BlogProps {
    allPostsData: AllPosts;
}

const pageTitle = "Rodzy's blog";
const pageDescription =
    "On this blog you will find all topics related to web development, tutorials and sometimes just my toughts about certain technologies.";

const Blog: NextPage<BlogProps> = ({ allPostsData }) => {
    return (
        <>
            <Seo pageTitle={pageTitle} pageDescription={pageDescription} />
            <TheLayout pageSection="blog">
                <section
                    className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                >
                    <h1 className={utilStyles.headingLg}>Rodzy's blog</h1>
                    <p>
                        On this blog you will find all topics related to web
                        development (<i>mostly frontend stuff</i>), modern
                        applications architectural patterns, tutorials and
                        sometimes just my toughts about certain technologies.
                    </p>
                    <h2 className={utilStyles.heading}>Latest posts</h2>
                    <motion.ul
                        className={utilStyles.list}
                        variants={containerAnimation}
                        initial="hidden"
                        animate="visible"
                    >
                        {allPostsData.map((item:PostData) => (
                            <MotionList
                                key={item.id}
                                postData={item}
                            />
                        ))}
                    </motion.ul>
                </section>
            </TheLayout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};

export default Blog;
