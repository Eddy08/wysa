import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Header() {
  return (
    <>
      <a href="/" target="_blank" rel="noopener noreferrer">
        Wysa{" "}
        <span className={styles.logo}>
          <Image src="/penguin.svg" alt="Wysa Logo" width={72} height={16} />
        </span>
      </a>
    </>
  );
}
