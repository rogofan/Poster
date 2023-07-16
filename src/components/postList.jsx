import { Fragment } from "react";
import style from "./PostsList.module.css";
import Post from "./post";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  const listOfPost = (
    <ul className={style.posts}>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          author={post.author}
          body={post.body}
        />
      ))}
    </ul>
  );

  const emptyLabel = <h2 className={style.emptyLabel}>Any posts yet...</h2>;

  return <Fragment>{!posts.length ? emptyLabel : listOfPost}</Fragment>;
}

export default PostList;
