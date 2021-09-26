import { getAllPostIds } from "lib/posts";
import { getPostData } from "lib/posts";
const Post = ({ postData }) => {
  return (
    <div>
      {postData.title}{" "}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </div>
  );
};

export async function getStaticPaths() {
  return { paths: getAllPostIds(), fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const postData = await getPostData(id);
  return { props: { postData } };
}

export default Post;
