import Head from "next/head";
import Link from "next/link";
import Post from "../components/post";
import { GetPosts } from "../lib/postdata_api";

export const getStaticProps = async (_context) => {
  // fetch list of posts
  const posts = await GetPosts();
  return {
    props: {
      postDataList: posts,
    },
  };
};

const IndexPage = ({ postDataList }) => {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <Link href={"/custom"}>
        <a>
          <h1>Custom Page</h1>
        </a>
      </Link>

      <h1>List of posts</h1>

      <section>
        {postDataList.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </section>
    </main>
  );
};

export default IndexPage;
