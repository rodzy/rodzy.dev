import styled from "styled-components";

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const InsideContent = styled("div")`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 10rem;
`;

const ImageIcon = styled("img")`
    width: 1.5rem;
    display: block;
    margin: auto;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
        transform: scale(1.3);
    }
`;

const Buttons = styled("button")`
    appearance: none;
    border: none;
`;

const Vote: React.FC = () => {
    return (
        <Container>
            <h5>Did you like this?</h5>
            <InsideContent>
                <Buttons>
                    <span>
                        <ImageIcon
                            src="/icons/iconmonstr-thumb-2.svg"
                            alt="Thumb-up"
                        />
                    </span>
                </Buttons>
                <Buttons>
                    <span>
                        <ImageIcon
                            src="/icons/iconmonstr-thumb-6.svg"
                            alt="Thumb-down"
                        />
                    </span>
                </Buttons>
            </InsideContent>
        </Container>
    );
};

export default Vote;
