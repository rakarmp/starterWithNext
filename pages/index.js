import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Circle from "./components/circle";
import { useState, useEffect } from "react";
import { CircularProgress, Flex } from "@chakra-ui/react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Starter With Next</title>
        <meta name="description" content="Starter By RakaTrust" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!loading ? (
        <Circle />
      ) : (
        <Flex
          direction="column"
          align="center"
          justify="center"
          minH="100vh"
          p={8}
        >
          <CircularProgress isIndeterminate color="green.300" />
        </Flex>
      )}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code By RakaTrust Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
