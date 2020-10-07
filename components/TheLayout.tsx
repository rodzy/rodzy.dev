import styles from "../styles/layout.module.css";
import TheHeader from "./TheHeader";
import TheSideBar from "./TheSideBar";
import MainHeading from "./layout/MainHeading";
import InfoCard from "./layout/InfoCard";
import GoBackLinks from "./layout/GoBackLinks";

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
                        <GoBackLinks page="/blog" text="Back to blog"/>
                    )}
                    {pageSection === "blog" && (
                        <GoBackLinks page="/" text="Back to home"/>
                    )}
                </div>
            </div>
        </>
    );
};

export default TheLayout;
