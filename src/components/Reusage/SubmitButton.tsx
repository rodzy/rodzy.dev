import styled from "styled-components";

const SubmitButton = styled("button")`
    background-color: #4c2889;
    appearance: none;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.2rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    margin: 0.2rem;
    border: 2px solid;
    border-bottom-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-top-left-radius: 0.5rem;
    outline: none;
    cursor: pointer;
    border-color: #4c2889;
    color: #fff;
    overflow: hidden;
    transition: 0.5s ease;
    &:hover,
    &:focus {
        color: #4c2889;
        background-color: transparent;
    }
`;

export default SubmitButton;
