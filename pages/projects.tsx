import { NextPage } from "next";
import TheLayout from "../components/TheLayout";
import Seo from "../components/SEO";
import utilStyles from "../styles/utils.module.css";
import getAllrojects from "../lib/projects";
import { Project } from "../interfaces/Project";

const pageTitle = "My Projects";
const pageDescription = "My latest projects from GitHub";

const Projects: NextPage = () => {
    const { data, error, isValidating } = getAllrojects();

    return (
        <>
            <Seo pageTitle={pageTitle} pageDescription={pageDescription} />
            <TheLayout>
                <section
                    className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                >
                    <h1 className={utilStyles.headingLg}>My projects</h1>
                    <p>Take a look at my projects 🎈</p>
                    {error && <h1>Oops something went wrong 😓</h1>}
                    {isValidating && <h1>Loading...</h1>}
                    <ul className={utilStyles.list}>
                        {data &&
                            data.map((item: Project) => (
                                <li
                                    className={utilStyles.listItem}
                                    key={item.id}
                                >
                                    <p>
                                        <strong>{item.name}</strong>
                                    </p>
                                    <p>{item.description}</p>
                                </li>
                            ))}
                    </ul>
                </section>
            </TheLayout>
        </>
    );
};

export default Projects;
