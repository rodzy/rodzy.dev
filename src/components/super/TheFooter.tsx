import styled from "styled-components";

interface Props {
    pageSection: string;
}

const FooterRight = styled("footer")`
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
    @media (max-width: 700px) {
        justify-content: center;
    }
`;

const FooterLeft = styled("footer")`
    width: 100%;
    display: flex;
    justify-content: flex-start;
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
    @media (max-width: 700px) {
        justify-content: center;
    }
`;

const TextParagraph = styled("p")`
    font-size: 1rem;
    font-weight: 600;
    justify-content: flex-end;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-right: 1em;
    margin-left: 1em;
    @media (max-width: 700px) {
        margin-right: 0;
        margin-left: 0;
    }
`;

const TheFooter: React.FC<Props> = ({ pageSection }) => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
            {pageSection === "home" && (
                <FooterRight>
                    <TextParagraph>Isaac Rodríguez © {year}</TextParagraph>
                </FooterRight>
            )}
            {pageSection === "blog" && (
                <FooterLeft>
                    <TextParagraph>Isaac Rodríguez © {year}</TextParagraph>
                </FooterLeft>
            )}
            {pageSection === "posts" && (
                <FooterLeft>
                    <TextParagraph>Isaac Rodríguez © {year}</TextParagraph>
                </FooterLeft>
            )}
            {pageSection === "projects" && (
                <FooterRight>
                    <TextParagraph>Isaac Rodríguez © {year}</TextParagraph>
                </FooterRight>
            )}
        </>
    );
};

export default TheFooter;
