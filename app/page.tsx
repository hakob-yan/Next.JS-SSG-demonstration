import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>This is Home Page </h1>
      <h2>
        {" "}
        <Link href="/user">Go to Users</Link>
      </h2>
    </main>
  );
}
