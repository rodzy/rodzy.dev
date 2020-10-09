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

const MainTitle = styled("h1")`
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
    padding-left: 1rem;
    @media (max-width: 700px) {
        padding: 0;
        font-size: 2rem;
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
                <MainTitle>{name}</MainTitle>
                <h2 className={styles.headingSecond}>{title}</h2>
            </div>
        </HeaderContainer>
    );
};

export default MainHeading;
