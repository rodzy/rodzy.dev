import { GetStaticPaths, NextPage, GetStaticProps } from "next";
import Seo from "../../components/SEO";
import TheLayout from "../../components/TheLayout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import { PostData } from "../../types/PostTypes";
import Date from '../../components/Date'

interface PostProps {
    postData: PostData;
}

const Post: NextPage<PostProps> = ({ postData }) => {
    return (
        <>
            <Seo pageTitle={postData.title} pageDescription={postData.description} />
            <TheLayout pageSection="posts">
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    Published: <Date dateString={postData.date} />
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
            </TheLayout>
        </>
    );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const paramValue = params && params.id;
    const postData = await getPostData(paramValue);
    return {
        props: {
            postData,
        },
    };
};
