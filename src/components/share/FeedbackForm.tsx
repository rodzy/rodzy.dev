import utils from "../../styles/utils.module.css";
import { Container, InsideContent } from "../Reusage/Container";
import { TextArea } from "../Reusage/TextArea";
import MotionButton from "../MotionButton";
import SubmitButton from "../Reusage/SubmitButton";

interface Props {
    display: boolean;
    handle: boolean;
}

const FeedbackForm: React.FC<Props> = ({ display, handle }) => {
    return (
        <>
            {display && (
                <div className={utils.textContainer}>
                    <Container>
                        <h5>Leave your feedback {handle ? "😀" : "😪"}</h5>
                        <form>
                            <InsideContent
                                style={{
                                    width: "20rem",
                                }}
                            >
                                <TextArea
                                    id="textArea-feed"
                                    autoCapitalize="off"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    placeholder="Your feedback here..."
                                ></TextArea>
                            </InsideContent>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <SubmitButton>Send</SubmitButton>
                            </div>
                        </form>
                    </Container>
                </div>
            )}
        </>
    );
};

export default FeedbackForm;
