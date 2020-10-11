import { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import { Container, InsideContent } from "../Reusage/Container";
import { Buttons, ImageIcon } from "../Reusage/MiniBlocks";

const Vote: React.FC = () => {
    const [display, setDisplay] = useState<boolean>(false);

    return (
        <Container>
            {!display ? (
                <>
                    <h5>Did you like this?</h5>
                    <InsideContent>
                        <Buttons onClick={() => setDisplay(!display)}>
                            <span>
                                <ImageIcon
                                    src="/icons/iconmonstr-thumb-2.svg"
                                    alt="Thumb-up"
                                />
                            </span>
                        </Buttons>
                        <Buttons onClick={() => setDisplay(!display)}>
                            <span>
                                <ImageIcon
                                    src="/icons/iconmonstr-thumb-6.svg"
                                    alt="Thumb-down"
                                />
                            </span>
                        </Buttons>
                    </InsideContent>
                </>
            ) : (
                <FeedbackForm display={display} />
            )}
        </Container>
    );
};

export default Vote;
