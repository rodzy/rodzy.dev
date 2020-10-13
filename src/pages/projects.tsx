import { NextPage } from "next";
import TheLayout from "../components/super/TheLayout";
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
            <TheLayout pageSection="projects">
                <section
                    className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                >
                    <h1 className={utilStyles.headingXl}>My projects</h1>
                    <p>
                        <small>
                            <i>
                                Disclaimer: This page is still work in progress,
                                for now take a look at my repositories from GitHub
                            </i>
                            👷‍♂️🚧
                        </small>
                    </p>
                    {error && <h1>Oops something went wrong 😓</h1>}
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
                    {isValidating && <h1>Loading...</h1>}
                </section>
            </TheLayout>
        </>
    );
};

export default Projects;
