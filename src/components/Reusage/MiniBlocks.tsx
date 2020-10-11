import styled from "styled-components";

export const ImageIcon = styled("img")`
    width: 1.5rem;
    display: block;
    margin: auto;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
        transform: scale(1.3);
    }
`;

export const Buttons = styled("button")`
    appearance: none;
    border: none;
    outline: none;
`;
