import styles from "@styles/home.module.scss";
import classNames from "classnames";
import { getSortedPostsData } from "lib/posts";
import { useState } from "react";
import {
  Article,
  getColorForSubject,
  Subject,
} from "@components/posts/article";
import { Search } from "@components/icons/search";
import PageNumberColumn from "@components/posts/page_number_column";
import Link from "next/link";
import Image from "next/image";

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
  subject: Subject;
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

  const allPosts = allPostsData.map((article) => {
    return (
      <div key={article.id} className={styles.articleSpace}>
        <Article
          id={article.id}
          title={article.title}
          date={article.date}
          subject={article.subject}
          imageSrc={article.image}
        />
      </div>
    );
  });

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
                    <Link passHref href={`posts/${post.id}`}>
                      <img
                        alt={`${post.title}`}
                        className={styles.searchImage}
                        src={post.image}
                      />
                    </Link>

                    <div
                      style={{ color: getColorForSubject(post.subject) }}
                      className={styles.subject}
                    >
                      {post.subject}
                    </div>
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
      <div>
        <PageNumberColumn
          selectedPost={selectedPost}
          postCount={allPostsData.length}
          onClick={(i: number) => setSelectedPost(i)}
          className={styles.pageNumberColumn}
        />
      </div>
      <div className={styles.articleColumn}>
        <div className={styles.allPosts}>{allPosts}</div>
        <Article
          id={post.id}
          title={post.title}
          date={post.date}
          subject={post.subject}
          imageSrc={post.image}
        />
      </div>
      <div className={styles.explainer}>
        <div className={styles.spacer} />
        <div className={styles.midSizedDot} />
        <div className={styles.explainerSubtitle}>Introduction</div>
        <div className={styles.paragraphText}>
          Hey, welcome to my blog and personal site. I&apos;m ezeugo, an
          engineer, over thinker, and part time smash ultimate player. I
          graduated from Columbia University in 2018 and since then have worked
          as a full stack engineer. This site is like a personal playground for
          me, and hopefully over time, a place that i can maintain my thoughts.
        </div>
      </div>
    </div>
  );
}
