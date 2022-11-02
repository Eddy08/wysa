import Header from "../common/component/Header";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "../common/component/Footer";
import ChatArea from "../common/component/ChatArea";
export default function Chat() {
  return (
    <>
      <div>
        <Head>
          <title>📝 Wysa</title>
          <meta name="description" content="Wysa will not down everything" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="grid h-auto border-2 border-red-600">
          <article className={`grid grid-cols-3 border-2 border-green-400`}>

          <Header></Header>
         
            </article>
          <ChatArea></ChatArea>

          {/* <div className={`${styles.messages}`}></div> */}

        </main>

        <footer className={styles.footer}>
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
}
