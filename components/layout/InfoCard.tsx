import Link from "next/link";
import styled from "styled-components";
import styles from "../../styles/layout.module.css";
import utilStyles from "../../styles/utils.module.css";

interface InfoCardProps {
    name: string;
    title: string;
}

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
                <h1
                    className={styles.headingLgLayout}
                    style={{
                        marginBottom: 0,
                    }}
                >
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
                </h1>
                <h2
                    className={styles.headingSecond}
                    style={{
                        margin: 0,
                        fontSize: 16,
                    }}
                >
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default InfoCard;
