import React from "react";
import App from "next/app";
import { ThemeProvider } from "emotion-theming";
import theme from "../theme";
import Layout from "../components/layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;
