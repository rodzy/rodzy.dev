import { GetStaticProps, NextPage } from "next";
import TheLayout from "../components/TheLayout";
import { AllPosts } from "../types/PostsTypes";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { motion } from "framer-motion";
import { containerAnimation } from "../utils/containerAnimations";
import MotionList from "../components/MotionList";
import Seo from "../components/SEO";
import { PostData } from "../types/PostTypes";
import BlogIntro from "../components/content/BlogIntro";
import Who from "../components/minimal/Who";
import OnIndicator from "../components/minimal/OnIndicator";

interface BlogProps {
    allPostsData: AllPosts;
}

const pageTitle = "Rodzy's blog";
const pageDescription =
    "Isaac Rodríguez, helps explain concepts related with web development, technology, and JavaScript throught his monthly Markdown blog.";

const Blog: NextPage<BlogProps> = ({ allPostsData }) => {
    return (
        <>
            <Seo pageTitle={pageTitle} pageDescription={pageDescription} />
            <TheLayout pageSection="blog">
                <section
                    className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                >
                    <h1 className={utilStyles.headingXl}>Rodzy's blog</h1>
                    <BlogIntro content={pageDescription} />
                    <Who />
                    <h2 className={utilStyles.headingLg}>Latest posts</h2>
                    <OnIndicator
                        text="Reading times are average"
                        iconRoute="/icons/iconmonstr-help-2.svg"
                    />
                    <br></br>
                    <motion.ul
                        className={utilStyles.list}
                        variants={containerAnimation}
                        initial="hidden"
                        animate="visible"
                    >
                        {allPostsData.map((item: PostData) => (
                            <MotionList key={item.id} postData={item} />
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
