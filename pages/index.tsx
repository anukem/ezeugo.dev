import styles from "@styles/home.module.scss";
// import Link from "next/link";
import { getSortedPostsData } from "lib/posts";
import { PageNumber } from "@components/posts/page-number";
import { useState } from "react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [selectedPost, setSelectedPost] = useState(1);

  const pageNumbers = [...Array(4).keys()]
    .map((i) => i + 1)
    .map((i) => {
      return (
        <PageNumber
          onClick={() => setSelectedPost(i)}
          key={i + "_page"}
          n={i}
          isSelected={selectedPost === i}
        />
      );
    });

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageNumberColumn}>{pageNumbers}</div>
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
