import styles from "./header.module.css";
export default function Header({ children }) {
  return (
    <>
      <div className={styles.container}> I am the header</div>
      {children}
    </>
  );
}
