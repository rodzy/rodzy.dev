import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Aanimated from "../utils/Aanimated";

export const More: React.FC = () => {
    return (
        <div className={utilStyles.textContainerMore}>
            <p>
                So, who exactly am I? I'm a developer, enthusiast and tech fan.
                I'm someone with a great eye for design and accessibility on the
                web. I'm spending most of free time doing Open Source
                contributions and working on my new big side project{" "}
                <small>(Private info 👀)</small>.
            </p>
            <p>
                Outside of coding, I enjoy going to art galleries 🎨 & museums
                🗿. I like cooking 🍱 and sometimes I do play basketball 🏀. I
                also run a blog where I document some pretty cool things about
                tech, If you are interested check{" "}
                <Link href="/blog">
                    <Aanimated>Rodzy's Blog</Aanimated>
                </Link>
                .
            </p>
        </div>
    );
};
