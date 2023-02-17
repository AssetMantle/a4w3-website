import Head from "next/head";
import Layout from "../components/Layout";
import "../config/styles/index.scss";

function AppSite({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Art is something we do, a verb. Art is an expression of our thoughts, emotions, intuitions, and desires, but it is even more personal than that: it is about sharing the way we experience the world, which for many is an extension of the personality."
        />
        <title>Artists4web3</title>
        {/* PWA primary color */}
        <meta name="theme-color" content="#111111" />
        {/* open graphs start */}
        <meta property="og:site_name" content="Artists4web3" />
        <meta property="og:url" content="https://artists4web3.org/" />
        <meta property="al:web:url" content="https://artists4web3.org/" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:title" content="Artists4web3" />
        <meta
          property="og:description"
          content="Art is something we do, a verb. Art is an expression of our thoughts, emotions, intuitions, and desires, but it is even more personal than that: it is about sharing the way we experience the world, which for many is an extension of the personality."
        />
        {/* open graphs end */}
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default AppSite;
