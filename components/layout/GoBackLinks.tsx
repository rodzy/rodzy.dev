import Link from "next/link";
import styles from "../../styles/layout.module.css";

interface GoBackLinksProps {
    page: string;
    text: string;
}

const GoBackLinks: React.FC<GoBackLinksProps> = ({ page, text }) => {
    return (
        <div className={styles.backToHome}>
            <Link href={page}>
                <a>{`← ` + text}</a>
            </Link>
        </div>
    );
};

export default GoBackLinks;
