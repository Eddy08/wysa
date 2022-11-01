import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wysa</title>
        <meta
          name="description"
          content="Wysa , Chat Bot for Mental Well being"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Chat With <a href="/chat"> Wysa 🐧!</a>
        </h1>

        <p className={styles.description}>
          Get started by Clicking on Chat Button{" "}
        </p>

        <div className={styles.grid}>
          <a href="/chat" className={styles.card}>
            <h2>Chat &rarr; 📧</h2>
            <p>Chat With A Bot About Your Feelings 🗣.</p>
          </a>

          <a href="/port" className={styles.card}>
            <h2>Import Data &rarr; 📥</h2>
            <p>Import Data From Previous Conversation with Wysa !</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Wysa{" "}
          <span className={styles.logo}>
            <Image src="/penguin.svg" alt="Wysa Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
