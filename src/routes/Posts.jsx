import { Outlet } from "react-router-dom";
import PostList from "../components/postList";
import { Fragment, useState } from "react";

function Posts() {
  return (
    <Fragment>
      <Outlet />
      <main>
        <PostList />
      </main>
    </Fragment>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
