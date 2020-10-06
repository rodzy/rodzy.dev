import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import TheLayout from "../components/TheLayout";
import { AllPosts } from "../types/PostsTypes";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerAnimation } from "../utils/containerAnimations";
import MotionList from "../components/MotionList";

interface BlogProps {
    allPostsData: AllPosts;
}

const pageTitle = "Rodzy's blog";
const pageDescription =
    "On this blog you will find all topics related to web development, tutorials and sometimes just my toughts about certain technologies.";

const Blog: NextPage<BlogProps> = ({ allPostsData }) => {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription}></meta>
                {/* Twitter tags */}
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                {/*Open graph tags */}
                <meta name="og:title" content={pageTitle} />
                <meta name="og:description" content={pageDescription} />
            </Head>
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
                        {allPostsData.map(({ id, date, title }) => (
                            <Link
                                href="/posts/[id]"
                                as={`/posts/${id}`}
                                key={id}
                            >
                                <MotionList title={title} date={date} />
                            </Link>
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
