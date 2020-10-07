import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import TheHeader from "./TheHeader";
import PropTypes from "prop-types";
import TheSideBar from "./TheSideBar";

const name = "Isaac Rodríguez";
export const title = "Software Engineer in Costa Rica";
export const siteTitle = `Isaac Rodríguez`;

interface LayoutProps {
    children: React.ReactNode;
    pageSection?: string;
}

const TheLayout: React.FC<LayoutProps> = ({ children, pageSection }) => {
    return (
        <>
            <TheHeader />
            <div className={styles.insiderContainer}>
                <TheSideBar img="Hi"/>
                <div className={styles.container}>
                    <header className={styles.header}>
                        {pageSection === "home" && (
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
                        )}
                    </header>
                    <main>{children}</main>
                    {pageSection !== "home" && (
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
                    )}
                    {pageSection !== "home" && pageSection !== "blog" && (
                        <div className={styles.backToHome}>
                            <Link href="/blog">
                                <a>← Back to blog</a>
                            </Link>
                        </div>
                    )}
                    {pageSection === "blog" && (
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

TheLayout.propTypes = {
    pageSection: PropTypes.string,
    children: PropTypes.node,
};
