import styled from "styled-components";

const SpanTags = styled("span")`
    display: inline;
    color: #4c2889;
    text-decoration: underline;
`;

const Who: React.FC = () => {
    return (
        <p>
            He's a <SpanTags>web developer</SpanTags>,&nbsp;
            <SpanTags>modern technologies enthusiast</SpanTags><span> & </span>
            <SpanTags>writer</SpanTags>
        </p>
    );
};

export default Who;
