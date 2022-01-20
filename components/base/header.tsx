import styles from "./header.module.scss";
import Link from "next/link";
import { cloneElement, useRef, useState } from "react";
import classNames from "classnames";
import { COLORS } from "../constants/constants";
import { Search } from "../icons/search";

export default function Header({ children }) {
  const [isSearching, toggleSearch] = useState(false);

  const [search, setSearch] = useState("");

  const [showHeader, toggleHeader] = useState(true);

  const inputRef = useRef(null);

  const child = cloneElement(children, {
    search,
    toggleHeader,
    isSearchInputOpen: isSearching,
    setSearch: (value: string) => {
      setSearch(value);
      inputRef.current.value = "";
      toggleSearch(false);
    },
  });

  if (!showHeader) {
    return child;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Most Popular</Link>
        </div>
        <div className={styles.title}>readonly.</div>
        <div
          onClick={() => {
            toggleSearch(true);
            inputRef.current?.focus();
          }}
          className={classNames(styles.searchContainer, {
            [styles.searchBackground]: !isSearching,
          })}
        >
          <input
            ref={inputRef}
            onChange={(e) => setSearch(e.target.value)}
            className={classNames(styles.input, {
              [styles.isNotSearching]: !isSearching,
              [styles.isSearching]: isSearching,
            })}
          />
          <div className={styles.searchInput}>
            <Search width={"20px"} height={"20px"} color={COLORS.PAGE_WHITE} />
          </div>
        </div>
      </div>
      {child}
    </>
  );
}
