import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import Provider from "../components/Provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <AnimatePresence initial={false} exitBeforeEnter={true}>
                <motion.div
                    key={router.route}
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    variants={{
                        pageInitial: {
                            opacity: 0,
                        },
                        pageAnimate: {
                            opacity: 1,
                        },
                        pageExit: {
                            opacity: 0,
                        },
                    }}
                >
                    <Provider>
                        <Component {...pageProps} />
                    </Provider>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default MyApp;
