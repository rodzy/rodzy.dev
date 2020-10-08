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
                            // y:-300,
                            opacity: 0,
                        },
                        pageAnimate: {
                            // y: 0,
                            opacity: 1,
                        },
                        pageExit: {
                            // y: 600,
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
