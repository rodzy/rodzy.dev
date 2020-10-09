import Head from "next/head";

interface SEOProps {
    pageTitle: string;
    pageDescription: string;
    individualImg?: string;
}

const Seo: React.FC<SEOProps> = ({ pageTitle, pageDescription }) => {
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription}></meta>
            {/* Twitter tags */}
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            {/*Open graph tags */}
            <meta name="og:title" content={pageTitle} />
            <meta name="og:description" content={pageDescription} />
        </Head>
    );
};

export default Seo;
