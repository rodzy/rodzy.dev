import utilStyles from "../styles/utils.module.css";
import socialContacts from "../utils/socials";
import { SocialItem } from "../types/SocialContacts";
import Aanimated from "./utils/Aanimated";


const Socials: React.FC = () => {
    return (
        <div className={utilStyles.socialsContainer}>
            {socialContacts.map(
                (item: SocialItem) =>
                    item.active && (
                        <Aanimated
                            href={item.url}
                            key={item.name}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.name}
                        </Aanimated>
                    )
            )}
        </div>
    );
};

export default Socials;
