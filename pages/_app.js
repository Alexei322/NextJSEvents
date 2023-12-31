import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="NextJS events"></meta>
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
