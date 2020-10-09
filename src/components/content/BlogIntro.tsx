interface Props {
    content: string;
}

const BlogIntro: React.FC<Props> = ({ content }) => {
    return <p>{content}</p>;
};

export default BlogIntro;
