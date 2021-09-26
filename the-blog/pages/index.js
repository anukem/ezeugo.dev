import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const posts = [];
  for (const post of [...Array(1).keys()]) {
    posts.push(<Link href={`/posts/${post}`}>My First Post</Link>);
  }
  return (
    <div className={styles.container}>
      Welcome to the blog. Check out my posts below.
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
