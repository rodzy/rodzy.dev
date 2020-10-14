import styled from "styled-components";

const SpanTags = styled("span")`
    background-image: linear-gradient(gray, gray);
    background-size: 100% 1px;
    background-position: bottom;
    background-repeat: no-repeat;
`;

const Who: React.FC = () => {
    return (
        <p>
            He's a <SpanTags>web developer</SpanTags>,&nbsp;
            <SpanTags>modern technologies enthusiast</SpanTags>
            <span> & </span>
            <SpanTags>writer</SpanTags>
        </p>
    );
};

export default Who;
