import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Aanimated from "../utils/Aanimated";
import ReanimatedList from "../utils/ReanimatedList";
import { CurrentList } from '../../utils/current';
import { Enjoyment } from '../../utils/enjoyment';

//Introduction/ aboutme component
export const Intro: React.FC = () => {
    return (
        <div className={utilStyles.textContainer}>
            <p>
                Hey there! I'm a self taught modern web developer, currently
                doing open source work and focusing on getting a gig at a great
                company that highly values professionals.
            </p>
            <p>
                As of today my experience is based on help others create web
                ecosystems and bring the whole community aspect, some of the
                most relevant projects I've contributed to are:{" "}
                <Aanimated
                    href="https://github.com/nuxt"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Nuxt.js
                </Aanimated>{" "}
                <small>
                    <i>(The Vue.js framework)</i>
                </small>
                ,{" "}
                <Aanimated
                    href="https://hospitalrun.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    HospitalRun Frontend
                </Aanimated>.
            </p>
            <p>
                If you're intrested on any of my work checkout my{" "}
                <Aanimated
                    href="https://github.com/rodzy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </Aanimated>
                , I'm very active on there and I got some public and very
                intresting projects to check out or even contribute to them.
            </p>
            <p>
                Wanna work together? Send me an{" "}
                <Aanimated
                    href="mailto:irod2899@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    email
                </Aanimated>{" "}
                or send me a direct message{" "}
                <Aanimated
                    href="https://twitter.com/rodzyrm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @rodzyrm
                </Aanimated>{" "}
                on twitter
            </p>
        </div>
    );
};

//About my tech stack and the technologies I'm most intrested in
export const Stack: React.FC = () => {

    return (
        <div className={utilStyles.textContainer}>
            <p>
                Well hello there! I know you're curious about what my tech stack
                is and what tools I'm using, well right now I'm feeling
                comfortable with:
            </p>
            <ReanimatedList currentItems={CurrentList}/>
            <p>
                That's my prefered stack when I'm working on a full on server +
                client project, however right now I'm enjoying a lot working on
                the frontend and with the JAMstack architecture, my prefered
                technologies for this are:
            </p>
            <ReanimatedList currentItems={Enjoyment}/>
            <p>
                So, yeah that's my core tech stack currently I've been doing a
                lot of SSG/SSR and overall having a good time with it. Of course
                there are a lot of other tools/libraries that I use for data
                fetching, quering information, JavaScript utilities & more...
            </p>
            <p>Here are some honorable mentions of tools that I use:</p>
            <ul>
                <li>React Query</li>
                <li>React SWR</li>
                <li>TypeGraphQL</li>
                <li>TypeORM</li>
                <li>Lodash</li>
            </ul>
            <p>
                There's a lot more to cover, if you're still intrested on
                knowing more in depth of why I use this tech stack, Check my{" "}
                <Link href="/posts/faq">
                    <Aanimated>FAQ</Aanimated>
                </Link>
            </p>
        </div>
    );
};

//More about myself If anyone cares about it
export const More: React.FC = () => {
    return (
        <div className={utilStyles.textContainerMore}>
            <p>
                So, who exactly am I? I'm an enthusiastic developer driven to
                deliver high quality software. I'm someone with a great eye for
                design and accesibility to archive a pleasant experience for the
                users.
            </p>
            <p>
                As a side note I'm spending most of free time doing Open Source
                contributions and working on my new big side project{" "}
                <small>(Private info 👀)</small>.
            </p>
            <p>
                Outside of coding, I enjoy going to art galleries 🎨 & museums
                🗿. I like cooking 🍱 and sometimes I do play basketball 🏀. I
                also run a blog where I document some pretty cool things about
                tech, If you are intrested check{" "}
                <Link href="/blog">
                    <Aanimated>Rodzy's Blog</Aanimated>
                </Link>
                .
            </p>
        </div>
    );
};
