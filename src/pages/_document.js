import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Template/Footer";
import Navbar from "../components/Template/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>タイトルが入ります</title>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        />
      </Head>
      <body style={{ margin: "0px", padding: "0px" }}>
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
