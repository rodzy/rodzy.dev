import utilStyles from "../styles/utils.module.css";
import socialContacts from "../utils/socials";
import { SocialItem } from "../types/SocialContacts";
import styled from "styled-components";

const AnchorTag = styled("a")`
    padding-left: 5px;
    text-align:center;
    text-decoration: underline;
    border-radius: 0.5rem;
    padding:10px;
    padding-top:0px;
    padding-bottom:0px;
`;

const Socials: React.FC = () => {
    return (
        <div className={utilStyles.socialsContainer}>
            {socialContacts.map(
                (item: SocialItem) =>
                    item.active && (
                        <AnchorTag
                            href={item.url}
                            key={item.name}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.name}
                        </AnchorTag>
                    )
            )}
        </div>
    );
};

export default Socials;
