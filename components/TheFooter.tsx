import styled from "styled-components";

const FooterContainer = styled("footer")`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-top: 1px solid #eaeaea;
    box-sizing: border-box; 

    img {
        margin-left: 0.5rem;
        margin-right: 1rem;
    }

    a {
        display: inline-block;
        justify-content: center;
        align-items: center;
    }
    p {
        justify-content: center;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
`;

const TheFooter: React.FC = () => {
    return (
        <FooterContainer>
            <p className="decription">Made with 💖 by Isaac Rodríguez</p>
        </FooterContainer>
    );
};

export default TheFooter;
