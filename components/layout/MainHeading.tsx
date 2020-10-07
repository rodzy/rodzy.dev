import styled from "styled-components";
import styles from "../../styles/layout.module.css";
import utilStyles from "../../styles/utils.module.css";

interface MainHeadingProps {
    name: string;
    title: string;
}

const HeaderContainer = styled("header")`
    display: flex;
    align-items: center;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const MainHeading: React.FC<MainHeadingProps> = ({ name, title }) => {
    return (
        <HeaderContainer>
            <img
                src="/images/49137701.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
            />
            <div>
                <h1 className={styles.headingMain}>{name}</h1>
                <h2 className={styles.headingSecond}>{title}</h2>
            </div>
        </HeaderContainer>
    );
};

export default MainHeading;
