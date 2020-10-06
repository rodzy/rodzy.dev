import Head from "next/head";
import Link from "next/link";
import { useEffect, useReducer } from "react";
import TheLayout, { siteTitle, title } from "../components/TheLayout";
import MainReducer from "../hooks/mainReducer";
import utilStyles from "../styles/utils.module.css";
import { motion } from "framer-motion";
import Socials from "../components/Socials";

const InitialState = {
    intro: true,
    stack: false,
    more: false,
};

const container = {
    hidden: {
        opacity: 1,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
};

const buttons = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const Home: React.FC = () => {
    const [state, dispatch] = useReducer(MainReducer, InitialState);
    const { intro, stack, more } = state;

    useEffect(() => {
        console.log("Thank you for visiting my site 📣🐢");
    }, []);

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content={title}></meta>
                {/* Twitter tags */}
                <meta name="twitter:title" content={siteTitle} />
                <meta
                    name="twitter:description"
                    content={siteTitle + `, ` + title}
                />
                {/*Open graph tags */}
                <meta name="og:title" content={siteTitle} />
                <meta
                    name="og:description"
                    content={siteTitle + `, ` + title}
                />
            </Head>
            <TheLayout pageSection="home">
                <section className={utilStyles.headingMd}>
                    <Socials />
                    <motion.div
                        className={utilStyles.buttonsContainer}
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            variants={buttons}
                            className={
                                intro
                                    ? utilStyles.microbuttonsSelected
                                    : utilStyles.microbuttons
                            }
                            onClick={() => dispatch({ type: "Intro" })}
                        >
                            About me
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            variants={buttons}
                            className={
                                stack
                                    ? utilStyles.microbuttonsSelected
                                    : utilStyles.microbuttons
                            }
                            onClick={() => dispatch({ type: "Stack" })}
                        >
                            Tech stack
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            variants={buttons}
                            className={
                                more
                                    ? utilStyles.microbuttonsSelected
                                    : utilStyles.microbuttons
                            }
                            onClick={() => dispatch({ type: "More" })}
                        >
                            More about me
                        </motion.button>
                    </motion.div>
                    {intro && (
                        <div className={utilStyles.textContainer}>
                            <p>
                                Hey there! I'm a self taught modern web
                                developer, currently doing open source work and
                                focusing on getting a gig at a great company
                                that highly values professionals.
                            </p>
                            <p>
                                As of today my experience is based on help
                                others create web ecosystems and bring the whole
                                community aspect, some of the most relevant
                                projects I've contributed to are: Nuxt.js{" "}
                                <small>
                                    <i>(The Vue.js framework)</i>
                                </small>
                                , HospitalRun Frontend{" "}
                                <small>
                                    <i>
                                        (Over <span>24K</span> stars on GitHub)
                                    </i>
                                </small>
                                .
                            </p>
                            <p>
                                If you're intrested on any of my work checkout
                                my <a href="https://github.com/rodzy">GitHub</a>
                                , I'm very active on there and I got some public
                                and very intresting projects to check out or
                                even contribute to them.
                            </p>
                            <p>
                                Wanna work together? Send me an{" "}
                                <a href="mailto:irod2899@gmail.com">email</a> or
                                send me a direct message{" "}
                                <a href="https://twitter.com/rodzyrm">
                                    @rodzyrm
                                </a>{" "}
                                on twitter
                            </p>
                        </div>
                    )}
                    {stack && (
                        <div className={utilStyles.textContainer}>
                            <p>
                                Well hello there! I know you're curious about
                                what my tech stack is and what tools I'm using,
                                well right now I'm feeling comfortable with:
                            </p>
                            <ul>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>PostgreSQL</li>
                                <li>GraphQL</li>
                            </ul>
                            <p>
                                That's my prefered stack when I'm working on a
                                full on server + client project, however right
                                now I'm enjoying a lot working on the frontend
                                and with the JAMstack architecture, my prefered
                                technologies for this are:
                            </p>
                            <ul>
                                <li>
                                    Next.js{" "}
                                    <small>
                                        <i>
                                            (The React framework for production)
                                        </i>
                                    </small>
                                </li>
                                <li>
                                    Gatsby.js{" "}
                                    <small>
                                        <i>
                                            (Just for{" "}
                                            <span
                                                style={{ color: "blueviolet" }}
                                            >
                                                F
                                            </span>
                                            <span style={{ color: "blue" }}>
                                                U
                                            </span>
                                            <span style={{ color: "green" }}>
                                                N
                                            </span>
                                            , Whenever I want to hook up some of
                                            the plugins with a headless CMS)
                                        </i>
                                    </small>
                                </li>
                                <li>
                                    TailwindCSS{" "}
                                    <small>
                                        <i>(It's just magical ✨)</i>
                                    </small>
                                </li>
                                <li>
                                    Chakra UI{" "}
                                    <small>
                                        <i>
                                            (One of the greatest components
                                            libraries for React)
                                        </i>
                                    </small>
                                </li>
                                <li>
                                    CSS modules{" "}
                                    <small>
                                        <i>
                                            (A clean way to quickly get JSCSS)
                                        </i>
                                    </small>
                                </li>
                            </ul>
                            <p>
                                So, yeah that's my core tech stack currently
                                I've been doing a lot of SSG/SSR and overall
                                having a good time with it. Of course there are
                                a lot of other tools/libraries that I use for
                                data fetching, quering information, JavaScript
                                utilities & more...
                            </p>
                            <p>
                                Here are some honorable mentions of tools that I
                                use:
                            </p>
                            <ul>
                                <li>React Query</li>
                                <li>React SWR</li>
                                <li>TypeGraphQL</li>
                                <li>TypeORM</li>
                                <li>Lodash</li>
                            </ul>
                            <p>
                                There's a lot more to cover, if you're still
                                intrested on knowing more in depth of why I use
                                this tech stack, Check my{" "}
                                <Link href="/posts/faq">
                                    <a>FAQ</a>
                                </Link>
                            </p>
                        </div>
                    )}
                    {more && (
                        <div className={utilStyles.textContainerMore}>
                            <p>
                                So, who exactly am I? I'm an enthusiastic
                                developer driven to deliver high quality
                                software. I'm someone with a great eye for
                                design and accesibility to archive a pleasant
                                experience for the users.
                            </p>
                            <p>
                                As a side note I'm spending most of free time
                                doing Open Source contributions and working on
                                my new big side project{" "}
                                <small>(Private info 👀)</small>.
                            </p>
                            <p>
                                Outside of coding, I enjoy going to art
                                galleries 🎨 & museums 🗿. I like cooking 🍱 and
                                sometimes I do play basketball 🏀. I also run a
                                blog where I document some pretty cool things
                                about tech, If you are intrested check{" "}
                                <Link href="/blog">
                                    <a>Rodzy's Blog</a>
                                </Link>
                                .
                            </p>
                        </div>
                    )}
                </section>
            </TheLayout>
        </>
    );
};
export default Home;
