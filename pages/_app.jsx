import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";

import Header from "@/components/Header";
import createStore from "@/store/store";

import "normalize.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
    background-color: #f1f4f9;
  }
`;

class NextApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <GlobalStyle />
          <Head>
            <title>Oslo Pride</title>
          </Head>
          <Header />
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(NextApp));
