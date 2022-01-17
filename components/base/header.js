import styles from "./header.module.scss";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import { COLORS } from "../constants/constants";
import { Search } from "../icons/search.js";

export default function Header({ children }) {
  const [isSearching, toggleSearch] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Most Popular</Link>
        </div>
        <div className={styles.title}>readonly.</div>
        <div
          className={classNames(styles.searchContainer, {
            [styles.searchBackground]: !isSearching,
          })}
        >
          <input
            className={classNames(styles.input, {
              [styles.isNotSearching]: !isSearching,
              [styles.isSearching]: isSearching,
            })}
          />
          <div
            className={styles.searchInput}
            onClick={() => {
              toggleSearch(true);
            }}
          >
            <Search width={"20px"} height={"20px"} color={COLORS.PAGE_WHITE} />
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
