import { NextPage } from "next";
import { useReducer } from "react";
import TheLayout, { siteTitle, title } from "../components/TheLayout";
import MainReducer from "../hooks/mainReducer";
import utilStyles from "../styles/utils.module.css";
import { motion } from "framer-motion";
import Socials from "../components/Socials";
import MotionButton from "../components/MotionButton";
import { containerAnimation } from "../utils/containerAnimations";
import Seo from "../components/SEO";
import { Intro } from "../components/content/Intro";
import { More } from "../components/content/AboutMore";
import { Stack } from "../components/content/Stack";

const InitialState = {
    intro: true,
    stack: false,
    more: false,
};

const Home: NextPage = () => {
    const [state, dispatch] = useReducer(MainReducer, InitialState);
    const { intro, stack, more } = state;

    return (
        <>
            <Seo
                pageTitle={siteTitle}
                pageDescription={siteTitle + `, ` + title}
            />
            <TheLayout pageSection="home">
                <section className={utilStyles.headingMd}>
                    <Socials />
                    <motion.div
                        className={utilStyles.buttonsContainer}
                        variants={containerAnimation}
                        initial="hidden"
                        animate="visible"
                    >
                        <MotionButton
                            text="About me"
                            className={
                                intro
                                    ? utilStyles.microbuttonsSelected
                                    : utilStyles.microbuttons
                            }
                            onClick={() => dispatch({ type: "Intro" })}
                        />
                        <MotionButton
                            text="Tech stack"
                            className={
                                stack
                                    ? utilStyles.microbuttonsSelected
                                    : utilStyles.microbuttons
                            }
                            onClick={() => dispatch({ type: "Stack" })}
                        />
                        <MotionButton
                            text="More about me"
                            className={
                                more
                                    ? utilStyles.microbuttonsSelected
                                    : utilStyles.microbuttons
                            }
                            onClick={() => dispatch({ type: "More" })}
                        />
                    </motion.div>
                    {intro && <Intro />}
                    {stack && <Stack />}
                    {more && <More />}
                </section>
            </TheLayout>
        </>
    );
};
export default Home;
