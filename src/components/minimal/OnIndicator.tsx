import styled from "styled-components";

interface OnIndicatorProps {
    text: string;
    iconRoute?: string;
}

const IndicatorContainer = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const IconContent = styled("img")`
    display: block;
    margin: auto;
    width: 18px;
    margin-right: 2px;
`;

const TextContent = styled("div")`
    display: flex;
    flex-direction: row;
`;

const SpanEffect = styled("span")`
    font-weight: 600;
    font-size: 16px;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: #5b5b5b;
    &::after {
        content: "";
        background: #d3d3d3;
        position: absolute;
        left: 4px;
        bottom: -6px;
        width: calc(100% - 8px);
        height: calc(100% - 15px);
        z-index: 0;
        transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
    }
`;

const OnIndicator: React.FC<OnIndicatorProps> = ({ text, iconRoute }) => {
    return (
        <IndicatorContainer>
            <TextContent>
                <IconContent src={iconRoute} />
                <SpanEffect>{text}</SpanEffect>
            </TextContent>
        </IndicatorContainer>
    );
};

export default OnIndicator;
