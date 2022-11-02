import Header from "../common/component/Header";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "../common/component/Footer";

export default function Import() {
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

          {/* <div className={`${styles.messages}`}></div> */}
          <article className="grid grid-rows-3">
            <h1 className="p-0 m-0 text-center text-2xl">Import Data </h1>
            <form className="grid grid-rows-3 text text-center items-center place-content-center">
              <label htmlFor="messages">
                <span>Messages</span>
                <input type="checkbox" name="messages" id="messages" />
              </label>
              <label htmlFor="journal">
                <span>Journal</span>
                <input type="checkbox" name="journal" id="journal" />
              </label>

              <label htmlFor="todo">
                <span>To Do</span>
                <input type="checkbox" name="todo" id="todo" />
              </label>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Green to blue
                </span>
              </button>
            </form>
          </article>
        </main>

        <footer className={styles.footer}>
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
}
