import React, { ReactElement } from "react";
import "../styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};

export interface AwesomeVideosProps extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AwesomeVideosProps) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default MyApp;
