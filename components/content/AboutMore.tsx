import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Aanimated from "../utils/Aanimated";

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