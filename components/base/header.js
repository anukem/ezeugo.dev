import styles from "./header.module.scss";
import Link from "next/link";
import { COLORS } from "../constants/constants";
import { Search } from "../icons/search.js";
export default function Header({ children }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Most Popular</Link>
        </div>
        <div className={styles.title}>readonly </div>
        <div
          onClick={() => console.log("i got clicked")}
          className={styles.searchContainer}
        >
          <Search width={"20px"} height={"20px"} color={COLORS.PAGE_WHITE} />
        </div>
      </div>
      {children}
    </>
  );
}
