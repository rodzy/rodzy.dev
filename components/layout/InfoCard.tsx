import Link from "next/link";
import styled from "styled-components";
import styles from "../../styles/layout.module.css";
import utilStyles from "../../styles/utils.module.css";

interface InfoCardProps {
    name: string;
    title: string;
}

const HeadingMain = styled("h1")`
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 0;
    padding-left: 1rem;
`;

const HeadingSecond = styled("h2")`
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.05rem;
    margin: 0;
    font-size: 16px;
    padding-left: 1rem;
    color: #8d8d8d;
    @media (max-width: 700px) {
        padding: 0;
    }
`;

const InfoCard: React.FC<InfoCardProps> = ({ name, title }) => {
    return (
        <div
            className={styles.header}
            style={{
                paddingTop: 40,
            }}
        >
            <Link href="/">
                <a>
                    <img
                        src="/images/49137701.jpg"
                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                        alt={name}
                        style={{
                            width: 60,
                            height: 60,
                        }}
                    />
                </a>
            </Link>
            <div>
                <HeadingMain>
                    <Link href="/">
                        <a
                            className={utilStyles.colorInherit}
                            style={{
                                fontSize: 25,
                                textDecoration: "none",
                            }}
                        >
                            {name}
                        </a>
                    </Link>
                </HeadingMain>
                <HeadingSecond>
                    {title}
                </HeadingSecond>
            </div>
        </div>
    );
};

export default InfoCard;
