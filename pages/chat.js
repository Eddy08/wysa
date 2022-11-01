import Header from "../common/component/Header";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "../common/component/Footer";

export default function Chat() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>📝 Wysa</title>
          <meta name="description" content="Wysa will not down everything" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="grid grid-rows-2 border-2 min-h-screen border-red-600">
            <article className={`grid grid-cols-3 h-1/3 border-2 border-green-400 ${styles.header}`}> 

          <Header></Header>
         
            </article>

          {/* <div className={`${styles.messages}`}></div> */}

        </main>

        <footer className={styles.footer}>
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
}
