import { Fragment } from "react";
import "../styles/globals.css";
import Header from "../components/base/header";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header>
        <Component {...pageProps} />
      </Header>
    </Fragment>
  );
}

export default MyApp;
