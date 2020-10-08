import styled from "styled-components";

interface TheSideBarProps {
    img: string;
    switchProp?: string;
}

const SideBarContainer = styled("aside")`
    background-color: transparent;
    position:fixed;
    right: 0px;
    width: 100%;
    padding: 10rem;

    @media (max-width:1700px){
        padding-left:2em;
    }
    @media (max-width:1300px){
        padding-left:0;
    }
`;

const ImageAvatar = styled("img")`
    opacity: 0.8;
    transition: opacity 1s ease;
    transform: rotate(-10deg);
    &:hover {
        opacity: 1;
    }
    @media (max-width:1700px){
        width:30rem;
    }
    @media (max-width:1300px){
        width:20rem;
    }
`;

const TheSideBar: React.FC<TheSideBarProps> = ({ img, switchProp }) => {
    return (
        <SideBarContainer
            style={{
                transform: switchProp,
            }}
        >
            <ImageAvatar src={img} alt="Avatar" />
        </SideBarContainer>
    );
};

export default TheSideBar;
