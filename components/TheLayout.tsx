/* eslint-disable react/prop-types */
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import TheHeader from "./TheHeader";

const name = "Isaac Rodríguez";
export const title = "Software Engineer in Costa Rica";
export const siteTitle = `Isaac Rodríguez`;

interface LayoutProps {
    pageName: string;
    pageTitle: string;
    pageSection: string;
}

const TheLayout: React.FC<LayoutProps> = ({
    children,
    pageName,
    pageTitle,
    pageSection,
}) => {
    return (
        <>
            <TheHeader />
            <div className={styles.insiderContainer}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        {pageSection==="home" ? (
                            <>
                                <img
                                    src="/images/49137701.jpg"
                                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                                    alt={name}
                                />
                                <div>
                                    <h1 className={styles.headingMain}>
                                        {name}
                                    </h1>
                                    <h2 className={styles.headingSecond}>
                                        {title}
                                    </h2>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/images/49137701.jpg"
                                            className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                            alt={name}
                                        />
                                    </a>
                                </Link>
                                <div>
                                    <h1 className={styles.headingLgLayout}>
                                        <Link href="/">
                                            <a
                                                className={
                                                    utilStyles.colorInherit
                                                }
                                            >
                                                {name}
                                            </a>
                                        </Link>
                                    </h1>
                                    <h2 className={styles.headingSecond}>
                                        {title}
                                    </h2>
                                </div>
                            </>
                        )}
                    </header>
                    <main>{children}</main>
                    {!home && !blog && (
                        <div className={styles.backToHome}>
                            <Link href="/blog">
                                <a>← Back to blog</a>
                            </Link>
                        </div>
                    )}
                    {blog && (
                        <div className={styles.backToHome}>
                            <Link href="/">
                                <a>← Back to home</a>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default TheLayout;
