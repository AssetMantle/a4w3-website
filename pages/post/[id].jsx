import Head from "next/head";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { GetPost, GetPosts } from "../../lib/postdata_api";

export const getStaticPaths = async () => {
  const postList = await GetPosts();
  return {
    paths: postList.map((post) => {
      return {
        params: {
          id: post.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const postData = await GetPost(id);
  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }) => {
  return (
    <main>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <h1>{postData.title}</h1>

      <p>{postData.body}</p>

      <Link href="/">Go back to home</Link>
    </main>
  );
};

export default Post;
