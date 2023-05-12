import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Great_Vibes } from "@next/font/google";
import clsx from "clsx";
import Head from "next/head";
import { Provider } from "react-wrap-balancer";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
// import { hasCookie, setCookie } from "cookies-next";
import { DefaultLayout } from "@layout";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--great-vibes",
});

function LocalTreeApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [route]);

  useEffect(() => {
    pageProps.hasScrolled = hasScrolled;
  }, [hasScrolled, pageProps]);

  return (
    <>
      <Head>
        <title>{pageProps.head?.title || "Localtree"}</title>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content={pageProps.head?.description || "Events for groups"} />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* <NextIntlProvider messages={messages}> */}
      <Provider>
        <ChakraProvider>
          <ParallaxProvider>
            <main className={clsx(greatVibes.variable, "font-sans text-black")}>
              {pageProps.layout ? null : (
                <DefaultLayout hasScrolled={hasScrolled}>
                  <Component {...pageProps} />
                </DefaultLayout>
              )}
            </main>
          </ParallaxProvider>
        </ChakraProvider>
      </Provider>
      {/* </NextIntlProvider> */}
    </>
  );
}

export default LocalTreeApp;
