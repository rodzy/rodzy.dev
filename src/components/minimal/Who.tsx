import styled from "styled-components";

const SpanTags = styled("span")`
    display: inline;
    padding: 0 calc(0.12em + calc(12 * calc(12 / 8)));
    box-decoration-break: clone;
    background-repeat: no-repeat;
    color: #4c2889;
    background-image: linear-gradient(180deg, #8a63d257, #8a63d257);
    background-position-x: calc(4px * calc(12 / 8)), 0, 100%;
    background-position-y: calc(100% - 7px * -1);
    background-size: calc(100% - calc(4px * calc(12 / 8) * 2)) calc(12 * 1px),
        auto calc(12 * 1px), auto calc(12 * 1px);
`;

const Who: React.FC = () => {
    return (
        <p>
            He's a <SpanTags>Web developer </SpanTags>&bull;
            <SpanTags> Modern technologies enthusiast </SpanTags>&bull;
            <SpanTags> Writer</SpanTags>
        </p>
    );
};

export default Who;
