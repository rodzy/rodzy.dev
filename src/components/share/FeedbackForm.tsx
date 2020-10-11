import utils from "../../styles/utils.module.css";
import { Container, InsideContent } from "../Reusage/Container";
import { TextArea } from "../Reusage/TextArea";
import SubmitButton from "../Reusage/SubmitButton";
import MotionButton from "../MotionButton";

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
                                }}
                            >
                                <MotionButton
                                    text="Send"
                                    className={utils.microSubmitbuttonsSelected}
                                />
                            </div>
                        </form>
                    </Container>
                </div>
            )}
        </>
    );
};

export default FeedbackForm;
