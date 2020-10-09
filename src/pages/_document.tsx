import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    {/* Twitter tags */}
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:creator" content="@rodzyrm" />
                    <meta
                        name="twitter:image"
                        content="/me/rodzy-humble-2.webp"
                    />
                    {/*Open graph tags */}
                    <meta name="og:url" content="https://rodzy.vercel.app" />
                    <meta name="og:site_name" content="Isaac Rodríguez" />
                    <meta
                        property="og:image"
                        content="/me/rodzy-humble-2.webp"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
