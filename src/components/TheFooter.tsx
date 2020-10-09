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
    return (
        <>
            {pageSection === "home" && (
                <FooterRight>
                    <TextParagraph>
                        Made with 💖 by Isaac Rodríguez
                    </TextParagraph>
                </FooterRight>
            )}
            {pageSection === "blog" && (
                <FooterLeft>
                    <TextParagraph>
                        Made with 💖 by Isaac Rodríguez
                    </TextParagraph>
                </FooterLeft>
            )}
            {pageSection === "posts" && (
                <FooterLeft>
                    <TextParagraph>
                        Made with 💖 by Isaac Rodríguez
                    </TextParagraph>
                </FooterLeft>
            )}
            {pageSection === "projects" && (
                <FooterRight>
                    <TextParagraph>
                        Made with 💖 by Isaac Rodríguez
                    </TextParagraph>
                </FooterRight>
            )}
        </>
    );
};

export default TheFooter;
