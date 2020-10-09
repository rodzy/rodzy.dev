import utilStyles from "../../styles/utils.module.css";
import Aanimated from "../utils/Aanimated";

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
                </Aanimated>
                .
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