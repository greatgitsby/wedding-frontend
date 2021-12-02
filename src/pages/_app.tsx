import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "../theme";

import "../../styles/global.css";
import { getImageProps } from "../Images";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const images = pageProps.images;
  let ogImage = "";

  if (images) {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    ogImage = randomImage.src;
  }

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>avery and trey</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="We're getting married!" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="avery and trey" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://owen2moen.com/" />
        <meta property="og:description" content="We're getting married!" />
        <meta property="og:image" content={ogImage} />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export const getInitialProps = getImageProps;
