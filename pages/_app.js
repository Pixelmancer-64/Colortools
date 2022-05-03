import GlobalStyles from "../components/styles/Global";
import AlertHandler from "../components/App/AlertHandler";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <AlertHandler>
        <Component {...pageProps} />
      </AlertHandler>
    </>
  );
}

export default MyApp;
