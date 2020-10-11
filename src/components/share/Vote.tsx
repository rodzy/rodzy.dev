import { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import { Container, InsideContent } from "../Reusage/Container";
import { Buttons, ImageIcon } from "../Reusage/MiniBlocks";

const Vote: React.FC = () => {
    const [display, setDisplay] = useState<boolean>(false);
    const [handleEmotion, setHandle] = useState<boolean>(false);

    const handleEmotions = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setDisplay(!display);
        if (e.currentTarget.name.trim() === "Up") {
            setHandle(true);
        }
    };

    return (
        <Container>
            {!display ? (
                <>
                    <h5>Did you like this?</h5>
                    <InsideContent>
                        <Buttons name="Up" onClick={(e) => handleEmotions(e)}>
                            <span>
                                <ImageIcon
                                    src="/icons/iconmonstr-thumb-2.svg"
                                    alt="Thumb-up"
                                />
                            </span>
                        </Buttons>
                        <Buttons name="Down" onClick={(e) => handleEmotions(e)}>
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
                <FeedbackForm display={display} handle={handleEmotion} />
            )}
        </Container>
    );
};

export default Vote;
