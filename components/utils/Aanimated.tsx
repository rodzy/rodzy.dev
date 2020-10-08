import styled from "styled-components";

const Aanimated = styled("a")`
    font-weight:600;
      position: relative;
      overflow: hidden;
      text-decoration: none;
      color: #4C2889;
      z-index:24;
      &::after {
        content: "";
        background: #8a63d257;
        position: absolute;
        left: 12px;
        bottom: -6px;
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        z-index: 0;
        transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
      }
      &:hover:after, &:focus:after {
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 100%;
      }
`;

export default Aanimated;
