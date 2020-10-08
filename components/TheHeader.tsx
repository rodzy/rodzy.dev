import Link from "next/link";
import styled from "styled-components";

const WrapperDiv = styled.div`
    position: sticky;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
`;

const InsideDiv = styled.div`
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0px auto;
`;

const InsideInsideDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    text-align: left;
`;

const LogoContainer = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 34px;
    margin-right: 16px;
`;

const NavList = styled.nav`
    height: 40px;
    margin-left: 10px;
    position: relative;
    overflow-x: auto;
`;

const NavInnerList = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    height: 34px;
`;

const NavItems = styled.li`
    list-style-type: none;
    flex: 1 1 auto;
    margin: 0px;
    text-align: center;
    white-space: nowrap;
    font-size: 16px;
    line-height: 1.2;
`;

const SmallContainer = styled.div`
    overflow: auto;
    margin-left: auto;
    position: relative;
    a {
        font-size: 1.1rem;
        font-weight: 600;
        margin-left: 1rem;
        text-decoration: none;
        transition: 0.2s ease;
    }
    a:hover,
    a:focus {
        color: #8a63d257;
        text-decoration: underline;
    }
`;

const HeaderUp = styled.div`
    border-bottom: 2px solid;
    border-color: #000;
    padding: 16px 0;
    transition: background-color 0.5s ease;
`;

const TheHeader: React.FC = () => {
    return (
        <WrapperDiv>
            <HeaderUp>
                <InsideDiv>
                    <InsideInsideDiv>
                        <LogoContainer>
                            <Link href="/">
                                <div
                                    style={{
                                        position: "relative",
                                        overflow: "hidden",
                                        display: "inline-block",
                                        width: 50,
                                        height: 50,
                                        cursor: "pointer",
                                    }}
                                >
                                    <img
                                        src="/me/rodzy-humble.webp"
                                        alt="Logo"
                                    />
                                </div>
                            </Link>
                        </LogoContainer>
                        <SmallContainer>
                            <NavList>
                                <NavInnerList>
                                    <NavItems>
                                        <Link href="/blog">
                                            <a>Blog</a>
                                        </Link>
                                    </NavItems>

                                    <NavItems>
                                        <Link href="/projects">
                                            <a>Projects</a>
                                        </Link>
                                    </NavItems>
                                </NavInnerList>
                            </NavList>
                        </SmallContainer>
                    </InsideInsideDiv>
                </InsideDiv>
            </HeaderUp>
        </WrapperDiv>
    );
};

export default TheHeader;
