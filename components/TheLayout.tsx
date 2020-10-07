import styles from "../styles/layout.module.css";
import Link from "next/link";
import TheHeader from "./TheHeader";
import PropTypes from "prop-types";
import TheSideBar from "./TheSideBar";
import MainHeading from "./layout/MainHeading";
import InfoCard from "./layout/InfoCard";

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
                <TheSideBar img="Hi" />
                <div className={styles.container}>
                    {pageSection === "home" && (
                        <MainHeading name={name} title={title} />
                    )}
                    <main>{children}</main>
                    {pageSection !== "home" && (
                        <InfoCard name={name} title={title} />
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
