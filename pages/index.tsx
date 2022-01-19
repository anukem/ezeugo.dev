import styles from "@styles/home.module.scss";
import classNames from "classnames";
import { getSortedPostsData } from "lib/posts";
import { PageNumber } from "@components/posts/page-number";
import { useState } from "react";
import { Article, Subject } from "@components/posts/article";
import { Search } from "@components/icons/search";

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
  setSearch,
  isSearchInputOpen,
}: {
  allPostsData: PostData[];
  search: string;
  setSearch: (value: string) => void;
  isSearchInputOpen: boolean;
}) {
  const [selectedPost, setSelectedPost] = useState(1);

  const post = allPostsData[selectedPost];
  const showAllResults = isSearchInputOpen && search === "";

  const filteredPosts = allPostsData.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase()) && showAllResults
    );
  });

  const pageNumbers = allPostsData.map((_, i) => {
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
      {(search !== "" || isSearchInputOpen) && (
        <div className={styles.searchOverlay}>
          <div
            className={classNames(styles.searchModal, {
              [styles.noResults]: filteredPosts.length === 0,
            })}
          >
            <div className={styles.relativeSearchContainer}>
              <div
                onClick={() => {
                  setSearch("");
                }}
                className={styles.closeButton}
              >
                x
              </div>
              {filteredPosts.map((post) => {
                return (
                  <div key={post.id} className={styles.collage}>
                    <img className={styles.searchImage} src={post.image} />
                    <div className={styles.subject}>{Subject.Personal}</div>
                    <div className={styles.searchTitle}>{post.title}</div>
                  </div>
                );
              })}
              {filteredPosts.length === 0 && (
                <div className={styles.noResults}>
                  <Search height="40px" width="40px" color="#434343" />
                  <div className={styles.noResultsText}>no results found.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className={styles.pageNumberColumn}>{pageNumbers}</div>
      <div className={styles.articleColumn}>
        <Article
          id={post.id}
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
  //         <Link } passHref>
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
