import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../common/component/Footer";
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
          Chat With <Link href="/chat"> Wysa 🐧!</Link>
        </h1>

        <p className={styles.description}>
          Get started by Clicking on Chat Button{" "}
        </p>

        <div className={styles.grid}>
        <Link href="/profile" className={styles.card}>
            <h2>Signup &rarr; 🔐</h2>
            <p>Signup and Start the Chat  🏁 with Wysa.</p>
          </Link>
          <Link href="/chat" className={styles.card}>
            <h2>Chat &rarr; 📧</h2>
            <p>Chat With A Bot About Your Feelings 🗣.</p>
          </Link>

          <Link href="/import" className={styles.card}>
            <h2>Import Data &rarr; 📥</h2>
            <p>Import Data From Previous Conversation with Wysa !</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  );
}
