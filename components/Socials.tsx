import utilStyles from "../styles/utils.module.css";
import socialContacts from "../utils/socials";
import { SocialItem } from "../types/SocialContacts";

const Socials: React.FC = () => {
    return (
        <div className={utilStyles.socialsContainer}>
            {socialContacts.map(
                (item: SocialItem) =>
                    item.active && (
                        <a
                            href={item.url}
                            key={item.name}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.name}
                        </a>
                    )
            )}
        </div>
    );
};

export default Socials;
