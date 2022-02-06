import styles from "@styles/home.module.scss";
import classNames from "classnames";
import { getSortedPostsData } from "lib/posts";
import { useState } from "react";
import { Article, Subject } from "@components/posts/article";
import { Search } from "@components/icons/search";
import PageNumberColumn from "@components/posts/page_number_column";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export interface PostData {
  date: string;
  id: string;
  title: string;
  image?: string;
  contentHtml: string;
}

export default function Home({
  allPostsData,
  search,
  setSearch,
  isSearchInputOpen,
  toggleHeader,
}: {
  allPostsData: PostData[];
  search: string;
  setSearch: (value: string) => void;
  isSearchInputOpen: boolean;
  toggleHeader: (open: boolean) => void;
}) {
  const [selectedPost, setSelectedPost] = useState(1);

  const post = allPostsData[selectedPost];
  const showAllResults = isSearchInputOpen && search === "";

  const filteredPosts = allPostsData.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase()) || showAllResults
    );
  });

  toggleHeader(true);
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
                    <Link href={`posts/${post.id}`}>
                      <img className={styles.searchImage} src={post.image} />
                    </Link>

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
      <PageNumberColumn
        selectedPost={selectedPost}
        postCount={allPostsData.length}
        onClick={(i: number) => setSelectedPost(i)}
        className={styles.pageNumberColumn}
      />
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
          Columbia University in 2018 and since then have worked as a full stack
          engineer. This site is like a personal playground for me, and
          hopefully over time, a place that i can maintain my thoughts.
        </div>
      </div>
    </div>
  );
}
