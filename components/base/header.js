import styles from "./header.module.css";
import Link from "next/link";
export default function Header({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Link href={"/"}>Home</Link>
      </div>
      {children}
    </>
  );
}
