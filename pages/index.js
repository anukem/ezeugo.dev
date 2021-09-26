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
  return (
    <div className={styles.container}>
      Welcome to the blog. Check out my posts below.
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            // eslint-disable-next-line @next/next/link-passhref
            <Link key={id} href={`/posts/${id}`}>
              <li>
                `&quot;`test`&quot;`
                {title}
                <br />
                {date}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
}