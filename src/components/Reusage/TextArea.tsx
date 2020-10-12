import styled from "styled-components";

export const TextArea = styled("textarea")`
    background-color: transparent;
    border-radius: 0px;
    border: 1px solid;
    border-radius:0.5rem;
    border-color:#8c8c8d;
    box-shadow: none;
    box-sizing: border-box;
    display: block;
    font-family: var(--font-sans);
    font-size: 0.9rem;
    line-height: 1.7;
    height: 100%;
    min-height: 100px;
    outline: 0px;
    padding: 7px 10px;
    resize: none;
    width: 100%;

    @media (max-width:700px){
        margin-left:10px;
        margin-right:10px;
    }
`