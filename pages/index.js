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
  return <div />;
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
