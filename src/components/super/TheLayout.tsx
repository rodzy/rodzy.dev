import styles from "../../styles/layout.module.css";
import TheHeader from "./TheHeader";
import TheSideBar from "./TheSideBar";
import MainHeading from "../layout/MainHeading";
import InfoCard from "../layout/InfoCard";
import GoBackLinks from "../layout/GoBackLinks";
import TheFooter from "./TheFooter";
import Vote from "../share/Vote";

const name = "Isaac Rodríguez";
export const title = "Software Engineer in Costa Rica";
export const siteTitle = `Isaac Rodríguez`;

interface LayoutProps {
    children: React.ReactNode;
    pageSection: string;
}

const TheLayout: React.FC<LayoutProps> = ({ children, pageSection }) => {
    return (
        <>
            <TheHeader />
            <div className={styles.insiderContainer}>
                {pageSection === "home" && (
                    <TheSideBar img="/me/rodzy-humble-2.webp" />
                )}
                {pageSection === "projects" && (
                    <TheSideBar img="/me/rodzy-smile.webp" />
                )}
                <div className={styles.container}>
                    {pageSection === "home" && (
                        <MainHeading name={name} title={title} />
                    )}
                    <main>{children}</main>
                    {pageSection === "blog" && (
                        <InfoCard name={name} title={title} />
                    )}
                    {pageSection === "posts" && (
                        <>
                            <Vote />
                            <InfoCard name={name} title={title} />
                            <GoBackLinks page="/blog" text="Back to blog" />
                        </>
                    )}
                    {pageSection === "projects" && (
                        <GoBackLinks page="/" text="Back to home" />
                    )}
                </div>
            </div>
            <TheFooter pageSection={pageSection} />
        </>
    );
};

export default TheLayout;
