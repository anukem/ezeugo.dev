import styles from "@styles/home.module.scss";
import classNames from "classnames";
// import Link from "next/link";
import { getSortedPostsData } from "lib/posts";
import { PageNumber } from "@components/posts/page-number";
import { useState } from "react";
import { Article, Subject } from "@components/posts/article";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

interface PostData {
  date: string;
  id: string;
  title: string;
  image?: string;
}

export default function Home({
  allPostsData,
  search,
}: {
  allPostsData: PostData[];
  search: string;
}) {
  const [selectedPost, setSelectedPost] = useState(1);

  const post = allPostsData[selectedPost];

  const pageNumbers = allPostsData
    .filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
    .map((_, i) => {
      return (
        <PageNumber
          onClick={() => setSelectedPost(i)}
          key={i + 1 + "_page"}
          n={i + 1}
          isSelected={selectedPost === i}
        />
      );
    });

  return (
    <div className={styles.pageContainer}>
      <div className={styles.searchOverlay}></div>
      <div className={styles.pageNumberColumn}>{pageNumbers}</div>
      <div className={styles.articleColumn}>
        <Article
          title={post.title}
          date={post.date}
          subject={Subject.Personal}
          imageSrc={post.image}
        />
      </div>
      <div className={styles.explainer}>
        <div className={styles.spacer} />
        <div className={styles.midSizedDot} />
        <div className={styles.explainerSubtitle}>Introduction</div>
        <div className={styles.paragraphText}>
          Hey, welcome to my blog and personal site. I'm ezeugo, an engineer,
          over thinker, and part time smash ultimate player. I graduated from
          Columbia University in 2018 and since then have worked as an engineer
          @ Microsoft in the Windows Mixed Reality Team, and currently work as a
          software engineer at a
          <span className={classNames(styles.code, styles.reconcileText)}>
            startup
          </span>
        </div>
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
