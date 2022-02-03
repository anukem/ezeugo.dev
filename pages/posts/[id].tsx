import { getAllPostIds } from "lib/posts";
import { getPostData } from "lib/posts";
import { PostData } from "pages";
import styles from "./page.module.scss";
import { getSortedPostsData } from "lib/posts";
import PageNumberColumn from "@components/posts/page_number_column";
import homeStyles from "../../styles/home.module.scss";

const Post = ({
  postData,
  toggleHeader,
}: {
  postData: PostData;
  toggleHeader: (open: boolean) => void;
}) => {
  toggleHeader(true);
  return (
    <div>
      <div className={styles.pageContent}>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return { paths: getAllPostIds(), fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const postData = await getPostData(id);
  const allPostsData = getSortedPostsData();
  return { props: { postData, allPostsData } };
}

export default Post;
