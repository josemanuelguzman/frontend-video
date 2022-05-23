import React from "react";
import Head from "next/head";
import styles from "./BaseLayout.module.css";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Awesome videos</title>
        <meta name="description" content="Assessment for tl;dv" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <p>Made with ❤️</p>
        </footer>
      </div>
    </>
  );
}
