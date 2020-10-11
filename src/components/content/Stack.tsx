import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Aanimated from "../utils/Aanimated";
import ReanimatedList from "../utils/ReanimatedList";
import { CurrentList } from "../../utils/current";
import { Enjoyment } from "../../utils/enjoyment";
import { honorableMentions } from "../../utils/honorableMentions";
import styled from "styled-components";
import OnIndicator from "../minimal/OnIndicator";

const ImageContainer = styled("div")`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
`;

const ContentDiv = styled("div")`
    align-content: center;
`;

const ImageItem = styled("img")`
    width: 50px;
    display: block;
    margin: auto;
    transition: transform 0.3s ease;
    @media (max-width: 700px) {
        padding-top: 20px;
    }
`;

const Anchontainer = styled("a")`
    &:hover img {
        transform:scale(1.2)
    }
`;

const TextP = styled("span")`
    font-size: 15px;
`;

export const Stack: React.FC = () => {

    return (
        <div className={utilStyles.textContainer}>
            <p>
                Well hello there! I know you're curious about what my tech stack
                is and what tools I'm using, well right now I'm feeling
                comfortable with:
            </p>
            <ReanimatedList currentItems={CurrentList} />
            <OnIndicator
                iconRoute="/icons/iconmonstr-help-2.svg"
                text="Help: Click the items for more info"
            />
            <p>
                That's my prefered stack when I'm working on a full on server +
                client project, however right now I'm enjoying a lot working on
                the frontend and with the JAMstack architecture, my prefered
                technologies for this are:
            </p>
            <ReanimatedList currentItems={Enjoyment} />
            <OnIndicator
                iconRoute="/icons/iconmonstr-help-2.svg"
                text="Help: Click the items for more info"
            />
            <p>
                So, yeah that's my core tech stack currently I've been doing a
                lot of SSG/SSR and overall having a good time with it. Of course
                there are a lot of other tools/libraries that I use for data
                fetching, quering information, JavaScript utilities & more...
            </p>
            <p>Here are some honorable mentions of tools that I use:</p>
            <ImageContainer>
                {honorableMentions.map((item) => (
                    <ContentDiv key={item.id}>
                        <Anchontainer
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ImageItem src={item.url} />
                            <TextP>{item.name}</TextP>
                        </Anchontainer>
                    </ContentDiv>
                ))}
            </ImageContainer>
            <p>
                There's a lot more to cover, if you're still interested on
                knowing more in depth of why I use this tech stack, Check my{" "}
                <Link href="/posts/faq">
                    <Aanimated>FAQ</Aanimated>
                </Link>
            </p>
        </div>
    );
};
