import { NextPage } from "next";
import Head from "next/head";
import TheLayout from "../components/TheLayout";
import { AllPosts } from "../types/PostsTypes";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/Date";
import { motion } from "framer-motion";

interface BlogProps {
    allPostsData: AllPosts;
}

const pageTitle = "Rodzy's blog";
const pageDescription =
    "On this blog you will find all topics related to web development, tutorials and sometimes just my toughts about certain technologies.";

const container = {
    hidden: {
        opacity: 1,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
};

const listitems = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

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
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {allPostsData.map(({ id, date, title }) => (
                            <Link
                                href="/posts/[id]"
                                as={`/posts/${id}`}
                                key={id}
                            >
                                <motion.li
                                    whileHover={{ scale: 1 }}
                                    whileTap={{ scale: 0.9, boxShadow: "none" }}
                                    variants={listitems}
                                    className={utilStyles.listItem}
                                >
                                    <a>{title}</a>
                                    <br />
                                    <small className={utilStyles.lightText}>
                                        Published: <Date dateString={date} />
                                    </small>
                                </motion.li>
                            </Link>
                        ))}
                    </motion.ul>
                </section>
            </TheLayout>
        </>
    );
};

export default Blog;

