import styles from "../styles/home.module.scss";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import { PageNumber } from "../components/posts/page-number";

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
    <div className={styles.pageContainer}>
      <div className={styles.articleColumn}>
        <PageNumber isSelected n={1} />
        <PageNumber n={2} />
        <PageNumber n={3} />
        <PageNumber n={4} />
      </div>
    </div>
  );
  // return (
  //   <div className={styles.container}>
  //     Welcome to the blog. You can see past versions of the site{" "}
  //     <Link href={`/versions`}>here</Link>
  //     <section>
  //       {allPostsData.map(({ id, date, title }) => (
  //         <Link key={id} href={`/posts/${id}`} passHref>
  //           <a>
  //             <div>{title}</div>
  //             {date}
  //           </a>
  //         </Link>
  //       ))}
  //     </section>
  //   </div>
  // );
}
