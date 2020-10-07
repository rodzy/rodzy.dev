import styles from "../styles/layout.module.css";
import Link from "next/link";

const TheHeader: React.FC = () => {
    return (
        <div className={styles.theheaderWrapper}>
            <div className={styles.theheaderInsider}>
                <div className={styles.theheaderInsiderInsider}>
                    <div className={styles.theheadercontentdiv}>
                        <div
                            style={{
                                overflow: "auto",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                            <Link href="/projects">
                                <a
                                    style={{
                                        paddingLeft: 10,
                                    }}
                                >
                                    Projects
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheHeader;
