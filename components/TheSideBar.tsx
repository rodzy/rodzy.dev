import styled from 'styled-components'

interface TheSideBarProps{
    img: string;
}

const SideBarContainer = styled("div")`
        background-color: orange;
    position: absolute;
    left: 0px;
    width: 150px;
    padding: 10px;
`

const TheSideBar: React.FC<TheSideBarProps> = ({img}) => {
    return (
        <SideBarContainer>
            <h1>{img}</h1>
        </SideBarContainer>
    )
}

export default TheSideBar;