import Head from "next/head";
import Layout from "../components/Layout";
import "../config/styles/index.scss";

function AppSite({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A template for Landing Site" />
        <title>Landing Site</title>
        {/* PWA primary color */}
        <meta name="theme-color" content="#111111" />
        {/* open graphs start */}
        <meta property="og:site_name" content="Template Site" />
        <meta property="og:url" content="https://example.com" />
        <meta property="al:web:url" content="https://example.com" />
        <meta property="og:image" content="/socialTagCard.png" />
        <meta property="og:title" content="TemplateSite" />
        <meta
          property="og:description"
          content="This is a template site built in NextJS with Static HTML Export"
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
