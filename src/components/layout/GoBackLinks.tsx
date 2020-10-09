import Link from "next/link";
import styles from "../../styles/layout.module.css";
import Aanimated from '../utils/Aanimated';

interface GoBackLinksProps {
    page: string;
    text: string;
}

const GoBackLinks: React.FC<GoBackLinksProps> = ({ page, text }) => {
    return (
        <div className={styles.backToHome}>
            <Link href={page}>
                <Aanimated>{`← ` + text}</Aanimated>
            </Link>
        </div>
    );
};

export default GoBackLinks;
