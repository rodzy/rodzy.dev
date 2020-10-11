import utils from '../../styles/utils.module.css'

interface Props{
    display: boolean;
}

const FeedbackForm: React.FC<Props> = ({display}) => {
    return (
    <>
        { display && (
                <div className={utils.textContainer}>
                    <p>Hi</p>
                    </div>
        )}
            </>
    )
}

export default FeedbackForm