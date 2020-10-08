import styled from "styled-components"

interface OnIndicatorProps{
    text: string;
    iconRoute: string;
}

const IndicatorContainer = styled("div")`
    display:flex;
`

const IconContent = styled("img")`
    display: block;
    margin:auto;
`

const ButtonSelected = styled("button")`
    padding:30px;
`

const OnIndicator: React.FC<OnIndicatorProps> = ({text,iconRoute}) => {
    return (
        <IndicatorContainer>
            <IconContent src={iconRoute} />
            <ButtonSelected>{text}</ButtonSelected>
        </IndicatorContainer>
    )
}

export default OnIndicator