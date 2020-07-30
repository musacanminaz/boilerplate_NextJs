import React from "react";
import App from "next/app";

import "../public/css/antd.less";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
